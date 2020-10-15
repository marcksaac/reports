app.run(function ($rootScope, $location, userService) {
    $rootScope.$on('$routeChangeStart', function(evt, absNewUrl, absOldUrl) {
        //here you can check for your own condition and if not logged in then set $location.path(loginpath);
        userService.getUser();
  });
});