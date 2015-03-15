var app = app || {};

(function() {
  'use strict';

  app.SongsList = Backbone.View.extend({
    el: '#songsList',

    template: _.template($('#songsListTemplate').html()),

    events: {

    },

    initialize: function() {
      this.collection.fetch();
      this.listenTo(this.collection, 'sync', this.render);
    },

    render: function() {
      this.collection.each(function(model) {
        var tmpl = this.template(model.toJSON());
        this.$el.append(tmpl);
      }, this);
    }
  });
})();