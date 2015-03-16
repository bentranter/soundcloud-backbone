var app = app || {};

(function() {
  'use strict';

  app.SongView = Backbone.View.extend({
    el: '#song',

    template: _.template($('#songTemplate').html()),

    events: {
    },

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      // The easiest way to handle changing songs is actually using
      // jQuery's bind (that I've been able to come up with so far)
      $('#songPlayer').bind('ended', function() {
        console.log('Song ended, playing next song.');
        // Need to call model.next or something
        app.songs.nextSong();
      });
    }
  });
})();