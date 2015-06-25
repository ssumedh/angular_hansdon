app = angular.module('app', []);


app.controller('MainCtrl', function($scope){
	$scope.message = 'hello';
	
	$scope.updateMessage = function(message){
		$scope.message = message;
	};
});