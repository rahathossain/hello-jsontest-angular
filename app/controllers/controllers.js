jsonTestApp.controller('SimpleController', function($scope, $http) {
	$http({
		method : 'GET',
		url : 'http://date.jsontest.com/'
	}).success(function(data, status, headers, config) {
		$scope.date = data;
	}).error(function(data, status, headers, config) {
		alert("Error! Try again");
	});
});
