"use strict";

app.factory("SongStorage", function(FirebaseURL, $q, $http) {

	const getSongs = function() {
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

	const postNewSong = function(newSong) {
		return $q(function(resolve, reject) {
			$http.post(`${FirebaseURL}/songs.json`,
				JSON.stringify(newSong))
			.success(function() {
				resolve();
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	const deleteSong = function(songId) {
		return $q(function(resolve, reject) {
			$http.delete(`${FirebaseURL}/songs/${songId}.json
				`)
			.success(function() {
				resolve();
			})
			.error(function(error) {
				reject(error);
			});
		});
	};


	return {getSongs, postNewSong, deleteSong};
});