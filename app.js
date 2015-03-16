var app = app || {};

$(document).ready(function() {
  'use strict';

  new app.SongsList({
    collection: app.songs
  });

  // Don't start Backbone history until we've loaded our collection
  app.songs.on('sync', _.once(function() {
    // Since we don't control the server, don't bother with using
    // pushState URLs
    Backbone.history.start();
  }));
});