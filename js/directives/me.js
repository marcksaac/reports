app.directive('meContact', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/me/contact.html'
    };
});

app.directive('meDegree', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/me/degree.html'
    };
});

app.directive('meCertifications', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/me/certifications.html'
    };
});
