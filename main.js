'use strict';

// Make a model for all the crap Soundcloud gives us
var Songs = Backbone.Model.extend();

// Make a collection to hold the data in
var SongsCollection = Backbone.Collection.extend({
	model: Songs,
	url: 'https://api.soundcloud.com/users/33748259/tracks.json?client_id=8ec20fb5cf443b6a8370954c522149c3' // Grab Keenan's songs, make no attempt to hide my client ID
});

// Make a new instance of the collection
var songsCollection = new SongsCollection();
// And make the request. Hurray for promises!
songsCollection.fetch().complete(function() {
	console.log('Collection: ' + typeof(songsCollection));
});