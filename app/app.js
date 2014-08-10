var jsonTestApp = angular.module('jsonTestApp', [ 'ngRoute' ]);

jsonTestApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'SimpleController',
		templateUrl : 'app/partials/date.html'
	}).when('/stamp', {
		controller : 'SimpleController',
		templateUrl : 'app/partials/stamp.html'
	}).otherwise({
		redirectTo : '/'
	});
});
