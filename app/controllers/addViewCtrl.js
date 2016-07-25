"use strict";

app.controller("addViewCtrl", function(SongStorage, $scope, $location, AuthFactory) {
	$scope.newSong = {
		title: "",
		artist: "",
		album: "",
		uid: ""
	};

	$scope.addNewSong = function() {
		$scope.newSong.uid = AuthFactory.getUser();
		SongStorage.postNewSong($scope.newSong)
		.then(function() {
			$location.url("/songs/list");
		});
	}; 
});