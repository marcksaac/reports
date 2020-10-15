app.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
	    prefix: './js/i18n/',
	    suffix: '.json'
	  });
  	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sceParameters');
}]);
