(function() {
	'use strict';

	angular
	.module('app')
	.controller('topicsController', topicsController);


	function topicsController($log, $timeout, webDevTec, toastr, $scope, $http, $firebase) {

		
		$scope.categories = [];
		
		var ref = firebase.database().ref();
		ref.on("value", function(data) {
			$scope.categories = data.val().category;
            $scope.$apply();
		});

		$scope.AddTopic = function(){
			
			var categoriesObj = {};
				categoriesObj.category = $scope.categories;		
				categoriesObj.category.push($scope.inputVal);
			ref.set(categoriesObj);

				
			
		}
	}
})();