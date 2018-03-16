const vm = new Vue({
  el : "#app", // el = element. specify which section should it affect, this case it affects the "app" id secyion
  data: {
    welcomeMessage : "Welcome to the first vue",

    deliciousFruit : [
      {name : "apple", flavour : "tasty"},
      {name : "pen", flavour : "sweet"},
      {name : "pineapple", flavour : "tangy"}
    ],
    result : "penpineappleapplepen",

    hasVue : false,
    vuemessage: "hey, you can haz vue",

    seen : true
  },
  methods : {
    logClicked(e) {
      console.log(e.currentTarget, this);
    },
    reversemess : function() {
      this.result = this.result.split('').reverse().join('')
    }
  }
});
