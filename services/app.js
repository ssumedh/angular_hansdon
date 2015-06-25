app = angular.module('app', []);

//service
app.factory('messages', function(){
	var messages = {};
	
	messages.list = [];
	
	messages.add = function(message){
		messages.list.push({id: messages.list.length, text: message});
	};
	return messages;
});

//list controller
app.controller('ListCtrl', function(messages){
	var self = this;
	
	self.messages = messages.list;
});


//post controller to append messages to list
app.controller('PostCtrl', function(messages){
	var self = this;
	
	self.newMessage = 'hello';
	
	self.addMessage = function(message){
		messages.add(message);
		self.newMessage = '';
	};
});