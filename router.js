var app = app || {};

(function () {
  'use strict';

  // Routes: used for matching views to a model or collection
  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      '!/tracks/:id': 'playTrack',
      '#notFound': 'notFound'
    }
  });

  app.router = new Router();

  app.router.on('route:home', function(id) {
    // Play the first song by going to that route
    var model = app.songs.first();
    app.router.navigate('!/tracks/' + model.get('id'), {trigger: true});
  });

  app.router.on('route:playTrack', function(id) {
      var model = app.songs.get(id);

      new app.SongView({
        model: model,
        collection: app.songs
      });
  });

  app.router.on('route:notFound', function() {
    app.router.navigate('/', {trigger: true});
  });
})();