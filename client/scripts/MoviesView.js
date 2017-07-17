var MoviesView = Backbone.View.extend({

  initialize: function() {
    // your code here
    this.on('change', this.render());
  },

  render: function() {
    console.log('MoviesView has re-rendered')
    this.$el.empty();
    this.collection.forEach(this.renderMovie, this);
  },

  renderMovie: function(movie) {
    var movieView = new MovieView({model: movie});
    this.$el.append(movieView.render());
  }

});
