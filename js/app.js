var app = angular.module('app', ['pascalprecht.translate',"ngRoute",'ngCookies'])

app.config(function ($httpProvider) {
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});