app.controller('loginController', function($scope, $location, userService, controllerCommonsService) {

	controllerCommonsService.init($scope);
	$scope.CONTEXT_PATH = CONTEXT_PATH;

	$scope.login = {
		username: null,
		password: null
	}

	$scope.sendLogin = () => {
		userService.login($scope.login, (response) => {
			toastr.info("Bienvenido " + response.username);
			$location.path(CONTEXT_PATH);
		}, $scope.handleError, $scope.always);
	}

});
