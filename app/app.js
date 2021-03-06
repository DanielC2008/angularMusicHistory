"use strict";

const app = angular.module("angularize", ["ngRoute"])
.constant("FirebaseURL", "https://music-history-a08d4.firebaseio.com");

// Create route provider to show different views
app.config(function($routeProvider, FBCreds) {
		let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain
	};
	firebase.initializeApp(authConfig);

	$routeProvider.
	when("/login", {
		templateUrl: "partials/login.html",
		controller: "loginCtrl"
	}).
	when("/songs/list", {
		templateUrl: "partials/songList.html",
		controller: "songListCtrl"
	}).
	when("/songs/add", {
		templateUrl: "partials/addView.html",
		controller: "addViewCtrl"
	}).
	otherwise("/login");
});
