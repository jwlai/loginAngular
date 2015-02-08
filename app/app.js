'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'UserApp'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
  $routeProvider.when('/login', {templateUrl: 'login/login.html', login: true});
  $routeProvider.when('/signup', {templateUrl: 'signup/signup.html', public: true});
}]);

app.run(function(user){
	user.init({ appId: '54d6e87bd2b52'});
});
