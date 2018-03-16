const vm = new Vue({
  el : "#app", // el = element. specify which section should it affect, this case it affects the "app" id secyion
  data: {
    mainmessage : "what up",

    videodata : [
      {name: "Star Wars the Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "another SW movie"},
      {name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "ze upside downnnn"},
      {name: "Marvel's Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "avengers UNIDOS JAMAS SERAN VENCIDOS"}

    ],

    videotitle : "title goes here",
    videodescription : "description here, yay",
    videosource : ""
  },

  methods : {
    loadMovie(e) {
      e.preventDefault();

      dataKey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/') +1 );

      currentData = this.videodata.filter((video) => video.vidsource === dataKey);

      this.videotitle = currentData[0].name;
      this.videodescription = currentData[0].description;
      this.videosource = dataKey;
    }
  }
});
