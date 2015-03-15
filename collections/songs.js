var app = app || {};

(function() {
  'use strict';

  var Songs = Backbone.Collection.extend({
    model: app.Song,

    url: 'https://api.soundcloud.com/users/' + '3785024' + '/tracks.json?client_id=8ec20fb5cf443b6a8370954c522149c3'
  });

  app.songs = new Songs();
})();