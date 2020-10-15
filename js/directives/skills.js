app.directive('skills', function (skillsService) {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills/skills.html',
        controller: function($scope){
            $scope.categories = skillsService.getCategories();
            $scope.skills = skillsService.getSkills();
            $scope.skillsService = skillsService;
            $scope.search= {idCategory:undefined};

        }
    };
});
