"use strict";

app.controller("logoutCtrl", function($scope, AuthFactory, $location) {
	
		$scope.logout = function() {
			AuthFactory.logout();
			$location.url("/login");
		}
});