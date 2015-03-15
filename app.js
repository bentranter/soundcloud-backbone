var app = app || {};

$(document).ready(function() {
  'use strict';

  new app.SongsList({
    collection: app.songs
  });

  Backbone.history.start();
});