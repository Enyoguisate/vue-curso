const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.dir(this.$refs.userText);
      this.message = this.$refs.userText.value;
    },
    unmount() {
      app.unmount('#app');
    }
  },
  beforeCreate() {
    console.log('beforeCreate', );
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount', );
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 5000);

const app2 = Vue.createApp({
  template: ` 
    <h2> App 2 Works</h2>
    <p>{{ message }}</p>
    <button @click="mount">Mount APP</button>
  `,
  data() {
    return {
      message: 'RAGATZO!',
    };
  },
  methods: {
    mount() {
      console.log('mount');
      app.mount('#app');
    }
  },
});

app2.mount('#app2');


// let message = 'Hello!';

// let longMessage = message + ' World';

// console.log('longMessage', longMessage);

// message = '! Hello !!!';

// console.log('longMessage', longMessage);

const data = {
  message: 'Hello',
  longMsg: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    if(key === 'message') {
      target.longMsg = value + ' World?'
    }
    target.message = value;
    // console.log('target', target);
    // console.log('key', key);
    // console.log('value', value);
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!';

console.log('proxy.longMsg ', proxy.longMsg);