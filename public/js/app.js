angular.module("TestApp", []);

angular.module("TestApp").controller("MainController", ctrlFunction);

function ctrlFunction(){
	this.message = "Hello From AngularJS";
	
	this.people = [
		{name: "John Doe"},
		{name: "Jane Doe"},
		{name: "Jim Doe"}
	]
}
