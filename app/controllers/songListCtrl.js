"use strict";

app.controller("songListCtrl", function($scope, $location, SongStorage) {

	SongStorage.getSongs()
	.then(function(songsCollection){
		$scope.songs = songsCollection;
	});

	$scope.deleteSong = function(songId) {
		SongStorage.deleteSong(songId)
		.then(function(){
			$location.url("#/songs/list");
		});
	};	

});