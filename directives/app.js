app = angular.module('greetings', [])
.directive("welcome", function(){
	return {
		restrict: "A",
		link: function(){
			alert("hey there!");
		}
	}
})
.directive("goodbye", function(){
	return {
		restrict: "A",
		link: function(){
			alert("See you later!");
		}
	}
});

//.directive("welcome", function(){
//return {
//	restrict: "E",
//	template: "<div>Hi There! Everything seems good here!</div>"
//}
//});
//.directive("welcome", function(){
//	return {
//		
//	}
//});