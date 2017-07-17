var Movies = Backbone.Collection.extend({

  model: Movie,

  initialize: function() {
    // your code here
    this.on('change', this.sort, this);
  },

  comparator: 'title',

  sortByField: function(field) {
    // your code here
    // collection.sortByField('rating');
    this.comparator = field;
    this.sort();
  }

});
// beforeEach(function() {
//   sinon.spy(Movies.prototype, 'sort');
//   collection = new Movies(datum);
//   // instantiating a collection invokes sort; reset state
//   Movies.prototype.sort.reset();
//   model = collection.first();
// });
var datum = [
  {
    title: 'Primer',
    year: 2004,
    rating: 9
  },
  {
    title: 'Back to the Future',
    year: 1985,
    rating: 10
  }
];
var collection = new Movies(datum)
// Movies.prototype.sort.reset();
var model = collection.first();

// describe('Movie collection', function() {
//
//   it('should have a default comparator for title', function() {
//     expect(collection.comparator).to.equal('title');
//   });
//
//   it('should update its comparator', function() {
//     collection.sortByField('rating');
//     expect(collection.comparator).to.equal('rating');
//   });
//
//   it('should trigger sort when the comparator is changed', function() {
//     collection.sortByField('rating');
//     expect(collection.sort).to.have.been.called;
//   });
//
//   it('should trigger sort when a model changes', function() {
//     model.toggleLike();
//     expect(collection.sort).to.have.been.called;
//   });
//
// });
