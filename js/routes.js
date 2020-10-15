app.config(function($routeProvider) {
	$routeProvider
	.when("/logout", {
	  template : "<div ng-init='logout()'></div>"
	})
	.when("/login", {
	  templateUrl : "templates/login.html"
	})
	.when("/v1/reports/reports", {
	  templateUrl : "templates/reports/reports.html"
	})
	.when("/v1/reports/antifraud-data", {
	  templateUrl : "templates/reports/antifraud-data.html"
	})
	.when("/v1/reports/refunds", {
	  templateUrl : "templates/reports/refunds.html"
	})
	.otherwise({
		redirectTo:'/'
	});
  });