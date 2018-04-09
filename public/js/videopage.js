var videoApp = {
  //non-vue related things

  addComments(data) {
    // process the comments data and push them into vue
    data.forEach(review => videoApp.vm.reviews.push(review));
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
      // do post with all the new review stuff
      addReview(){
        let movieId = document.querySelector('.movId').textContent;

      axios.post('/api', {
             id : movieId,
            stars : this.numStars,
            comment : this.review
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

        // push things to the review array
        this.reviews.push({
          comments_copy : this.review,
          comments_rating : this.numStars,
          comments_date : `${ new Date() }`
        });

        this.review = "";
        this. numStars = 0;
      }
    }
  })
};

videoApp.addComments(appData.movies);//this is the calling to parse the stuff
