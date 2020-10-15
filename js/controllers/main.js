app.controller('mainCtrl', function($scope, $translate, $location, userService) {

	$scope.logout = function () {
		userService.logout();
		$location.path(CONTEXT_PATH);
	};

	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};

    $scope.isNull = isNull;
	$scope.isNotNull = isNotNull;
	$scope.isBlank = isBlank;
	$scope.isNotBlank = isNotBlank;
	$scope.isEmpty = isEmpty;
	$scope.isNotEmpty = isNotEmpty;
	$scope.eq = eq;
	$scope.notEq = notEq;
	$scope.not = not;

	$scope.hasAction = userService.hasAction;

	$scope.isLogged = userService.isLogged;

	$scope.isNotLogged = userService.isNotLogged;

});
