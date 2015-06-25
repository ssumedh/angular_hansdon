function FunCtrl($scope){
	var self = this
	self.start  = function(){
		console.log("time for some fun!");
	}
}

app = angular.module("coolApp", [])
.controller("FunCtrl", FunCtrl)
.directive("entering", function(){
	return function(scope, element, attrs){
		element.bind("mouseenter", function(){
			scope.$apply("fun.start()");
			//scope.fun.start();
		})
	}
});