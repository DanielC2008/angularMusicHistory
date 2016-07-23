"use strict";

const app = angular.module("angularize", ["ngRoute"])
.constant("FirebaseURL", "https://music-history-a08d4.firebaseio.com");

// Create route provider to show different views
app.config(function($routeProvider) {

	$routeProvider.
	when("/songs/list", {
		templateUrl: "partials/songList.html",
		controller: "songListCtrl"
	}).
	when("/songs/add", {
		templateUrl: "partials/addView.html",
		controller: "addViewCtrl"
	}).
	otherwise("/songs/list");
});
