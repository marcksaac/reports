app.directive('expCompanies', function (companiesService, projectsService, skillsService) {
    return {
        restrict: 'E',
        templateUrl: 'templates/experience/companies.html',
        controller: function($scope){
            $scope.companies = companiesService.get();
            $scope.projects = projectsService.get();
            $scope.companiesService = companiesService;
            $scope.search= {company:undefined};
        }
    };
});
