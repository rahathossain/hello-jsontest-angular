jsonTestApp.controller('SimpleController', function($scope, jsonTestFactory) {

	var callback = function(data) {
		$scope.date = data;
	};

	jsonTestFactory.getDate(callback);
});
