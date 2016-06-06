(function() {
	'use strict';

	angular
	.module('app')
	.controller('articlesController', articlesController);


	function articlesController($log, $timeout, webDevTec, toastr, $scope, $http, $firebase) {
		
		$scope.categories = [];
		

		// $scope.GetCategories = function(){
			
			var ref = firebase.database().ref();
			ref.on("value", function(data) {
				$scope.categories = data.val().category;
				$scope.$apply();
			});
			
		// }
	}
})();