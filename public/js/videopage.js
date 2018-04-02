var videoApp = {
  //non-vue related things

  addComments(data) {
    // process the comments data and push them into vue
    data.forEach(reviews => videoApp.vm.reviews.push(reviews));
  },

  vm : new Vue({
    delimiters : ["${","}"],

    el : "#movie",

    data : {
      reviews : [],

      numStars : 3,

      review : ""


    },

    methods : {
      addReview(){
        let movieId = document.querySelector('.movId').textContent;

        fetch('/api', {
          method : 'post',
          headers : {
            'Accept' : 'application/json, text-plain, /',
            'Content-type' : 'application/json'

          },
          body : JSON.stringify({
           id : movieId,
          stars : this.numStars,
          comment : this.review
         })
        })
        .then((resp) => resp.json())
        .then((data) =>{
          console.log(data);
        })
        .catch(function(error){
          console.log(error);
        });
      }
    }
  })
};

videoApp.addComments(appData.movies);
