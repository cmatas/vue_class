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

        fetch('/api', {
          method : 'post',
          headers : {
            'Accept' : 'application/json, text-plain, */*',
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
        .catch((error) => { // the arrow makes it into a function
          console.log(error);
        });
      }
    }
  })
};

videoApp.addComments(appData.movies);//this is the calling to parse the stuff
