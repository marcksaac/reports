app.controller('antifraudDataController', function($scope, $filter, requestService, controllerCommonsService, datatableCommonsService) {

	controllerCommonsService.init($scope);
	datatableCommonsService.init($scope);

	$scope.filter = {
		idTransactionTypes: [],
		status: [],
		from: new Date(),
		to: new Date()
	}

	$scope.tableRequest = {
		offset: 0,
		limit: 50,
		filter: $scope.filter
	}

	$scope.dates = {
		from: new Date(),
		to: new Date()
	}

	$scope.$watch('dates.from', function(newText){
		if (isNull(newText)) {
			$scope.filter.from = null;						
		} else {
			$scope.filter.from = $filter('date')(newText,'yyyy-MM-dd HH:mm:ss');
		}
  	});

	$scope.$watch('dates.to', function(newText){
		if (isNull(newText)) {
			$scope.filter.to = null;						
		} else {
			$scope.filter.to = $filter('date')(newText,'yyyy-MM-dd HH:mm:ss');
		}
	});

	$scope.columns = [
		'transactionId',
		'rejectedReason'
	];

	$scope.getCsv = () => {
		$scope.prosessingCsv = true;
		requestService.post($scope.tableRequest, CONTEXT_PATH + "/v1/antifraud-data/csv", 
		(response) =>{
			$scope.downloadFile(response, "antifraud-data.csv");
		}, $scope.handleError, 
		() => {
			$scope.always();
			$scope.prosessingCsv = false;
		});
	}

	$scope.getList = () => {
		requestService.post($scope.tableRequest, CONTEXT_PATH + "/v1/antifraud-data", $scope.loadList, $scope.handleError, $scope.always);
	}

	$('.selectpicker').selectpicker();

});
