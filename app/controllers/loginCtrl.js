"use strict";

app.controller("loginCtrl", function($scope, $location, AuthFactory) {
	$scope.login = function() {
		AuthFactory.authWithProvider()
		.then(function() {
			$location.path("/songs/list");
			$scope.$apply();
		});
	}
});