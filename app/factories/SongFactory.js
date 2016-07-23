"use strict";

app.factory("SongStorage", function(FirebaseURL, $q, $http) {

	let getSongs = function() {
		let songs = [];
		return $q(function(resolve, reject) {
			$http.get(`${FirebaseURL}/songs.json`)
			.success(function(songsObj) {
				let songsCollection = songsObj;
				Object.keys(songsCollection).forEach(function(key){
					songsCollection[key].id = key;
					songs.push(songsCollection[key]);
				});
				resolve(songs);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	return {getSongs};
});