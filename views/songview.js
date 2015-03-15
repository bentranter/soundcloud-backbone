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
    }
  });
})();