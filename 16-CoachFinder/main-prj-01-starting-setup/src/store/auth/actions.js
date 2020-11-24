let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth',{
      mode: 'login',
      ...payload
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      mode: 'signup',
      ...payload
    });
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    const API_KEY = 'AIzaSyAi8n5WmPYOFImCVZzh88B5DZdUdl85EgI';
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    if(mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }

    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    };
    const response = await fetch(url, options);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to authenticate.check you login data.'
      );
      throw error;
    }

    // const expiresIn = 5000;
    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    const userData = {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: expirationDate
    };
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', userData);
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if(expiresIn < 0) {
      return;
    }

    timer = setTimeout(function() {
      context.dispatch('autoLogout')
    }, expiresIn);

    if(token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: tokenExpiration,
      });
    }
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};

