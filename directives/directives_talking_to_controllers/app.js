function FunCtrl($scope){
	var self = this;
	self.start  = function(){
		console.log("time for some fun!");
	}
	
	self.end = function(){
		console.log("fun time is over!")
	}
}

app = angular.module("coolApp", [])
.controller("FunCtrl", FunCtrl)
.directive("entering", function(){
	return function(scope, element, attrs){
		element.bind("mouseenter", function(){
			scope.$apply(attrs.entering);
			//scope.fun.start();
		})
	}
});
