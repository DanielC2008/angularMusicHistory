"use strict";

app.controller("addViewCtrl", function(SongStorage, $scope, $location) {
	$scope.newSong = {
		title: "",
		artist: "",
		album: ""
	};

	$scope.addNewSong = function() {
		SongStorage.postNewSong($scope.newSong)
		.then(function() {
			$location.url("/songs/list");
		});
	}; 
});