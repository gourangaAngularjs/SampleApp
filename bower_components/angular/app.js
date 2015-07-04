var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl:'showList.html', controller:'ContactController'})
	.otherwise({redirectTo: '/'});
}]);