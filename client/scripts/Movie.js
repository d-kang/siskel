var Movie = Backbone.Model.extend({
  defaults: {
    like: true
  },
  toggleLike: function() {
  //   if (this.get('like') === true) {
  //     this.set('like', false)
  //   } else {
  //     this.set('like', true)
  //   }
    this.set('like', !this.get('like'));
  }

});
