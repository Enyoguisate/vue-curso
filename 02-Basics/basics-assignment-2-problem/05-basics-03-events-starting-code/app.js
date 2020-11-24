const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counterLastValue: 0,
      amount: 1,
      name: '',
      lastname: '',
      // fullName: '',
      completeName: ''
    };
  },
  methods: {
    addCounter() {
      this.counterLastValue = this.counter;
      this.counter = +this.counter + +this.amount;
    },
    takeCounter() {
      if (+this.counter - +this.amount >= 0) {
        this.counterLastValue = this.counter;
        this.counter = +this.counter - +this.amount;
      }
    },
    enterName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      event.preventDefault();
    },
    resetInputs() {
      this.name = '';
    },
    nameAndLastName() {
      this.completeName = '';
      if (this.name) {
        this.completeName = this.name;
      } else {
        this.completeName = this.lastname;
      }
      if (this.lastname && this.name) {
        this.completeName = this.completeName + ', ' + this.lastname;
      }
    }
  },
  computed: {
    fullName() {
      console.log('fullName');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Martin';
    }
  },
  watch: {
    name(value) {
      this.name = value;
      this.nameAndLastName();
    },
    lastname(value) {
      if (value === '') {
        this.lastname = '';
      } else {
        this.lastname = value;
      }
      this.nameAndLastName();
    },
    counter(value) {
      if( value > 50 ) {
        this.counter = 0;
      }
    }
  }
});

app.mount('#events');
