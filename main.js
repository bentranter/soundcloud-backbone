'use strict';

// Make a model for all the crap Soundcloud gives us, and the profile info
var Songs = Backbone.Model.extend();
var Profile = Backbone.Model.extend();

// Make a collection to hold the data in
var SongsCollection = Backbone.Collection.extend({
	model: Songs,
	url: 'https://api.soundcloud.com/users/33748259/tracks.json?client_id=8ec20fb5cf443b6a8370954c522149c3' // Grab Keenan's songs, make no attempt to hide my client ID
});

// The user's profile info
var ProfileInfo = Backbone.Collection.extend({
	model: Profile,
	url: 'https://api.soundcloud.com/users/33748259?client_id=8ec20fb5cf443b6a8370954c522149c3'
});

var ProfileView = Backbone.View.extend({
	el: '#profile',
	template: _.template($('#profileTemplate').html()),
	initialize: function() {
		this.collection.fetch({ reset: true });
		this.listenTo(this.collection, 'reset', this.render);
	},
	render: function() {
		this.collection.each(function(model) {
			var profileTemplate = this.template(model.toJSON());
			this.$el.append(profileTemplate);
		}, this);
	}
});

var profileInfo = new ProfileInfo();
var profileView = new ProfileView({
	collection: profileInfo
});

// Setup a view
var SongsView = Backbone.View.extend({
	el: '#songs',
	template: _.template($('#songsTemplate').html()),
	initialize: function() {
		this.collection.fetch({reset: true});
		this.listenTo(this.collection, 'add', this.renderItem);
		this.listenTo(this.collection, 'reset', this.render);
	},
	render: function() {
		this.collection.each(function(model) {
			var songsTemplate = this.template(model.toJSON());
			this.$el.append(songsTemplate);
		}, this);
	},
	renderItem: function(song) {
		var songsTemplate = this.template(song.toJSON());
		this.$el.append(songsTemplate);
	}
});

var songsCollection = new SongsCollection();
var songsView = new SongsView({
	collection: songsCollection
});

// Handle audio element
setTimeout(function() {
	var audio = document.getElementsByTagName('audio')[1];
	console.log(audio.src);
}, 3000);
