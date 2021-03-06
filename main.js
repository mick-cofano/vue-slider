new Vue({
  el: '#root',
  data: {
    imgs: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ],
    imgIDX: 0,
  },
  methods: {
    // next: function() {
    //   this.imgIDX += 1;
    // },
    // prev: function() {
    //   this.imgIDX -= 1;
    // }

    next: function() {
      if(this.imgIDX === this.imgs.length - 1) {
        this.imgIDX = 0;
      } else {
        this.imgIDX += 1;
      }
    },

    prev: function() {
      if(this.imgIDX === 0) {
        this.imgIDX = this.imgs.length - 1;
      } else {
        this.imgIDX -= 1;
      }
    }
  }
});
