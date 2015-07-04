var angularApp = angular.module('angularApp', ['ui.router']);
angularApp.config(function($stateProvider) {

  $stateProvider
    .state('p1', {
      url: "/page1",
      templateUrl: "partials/page1.html"
    })
    .state('p2', {
      url: "/page2",
      templateUrl: "partials/page2.html",
    })
    .state('p3', {
      url: "/page3",
      templateUrl: "partials/page3.html"
    })
});