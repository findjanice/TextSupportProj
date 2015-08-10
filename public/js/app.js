var app = angular.module('textSupport', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/template/home.html',
      controller: 'mainCtrl'
    })
    .when('/support', {
      templateUrl: 'js/template/service.html',
      controller: 'serviceCtrl'
    })
});
