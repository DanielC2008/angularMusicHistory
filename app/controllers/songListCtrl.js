"use strict";

app.controller("songListCtrl", function($scope, SongStorage) {
		SongStorage.getSongs()
		.then(function(songsCollection){
			console.log(songsCollection);
			$scope.songs = songsCollection;
		});
});