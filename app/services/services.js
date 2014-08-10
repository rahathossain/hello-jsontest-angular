jsonTestApp.factory('jsonTestFactory', function($http) {

	var factory = {};

	factory.getDate = function(callback) {
		$http({
			method : 'GET',
			url : 'http://date.jsontest.com/'
		}).success(function(data, status, headers, config) {
			callback(data);
		}).error(function(data, status, headers, config) {
			alert("Error! Try again");
		});
	};

	return factory;
});
