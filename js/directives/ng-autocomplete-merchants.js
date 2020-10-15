app.directive('ngMerchantAutocomplete', (merchantPickerService, autocompleteService) => {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			target : "=",
			label : '@',
			field : '@',
			cols : '@',
			mandatory : '=',
			multiple : '='
		},
        templateUrl: 'templates/fields/ng-general-autocomplete.html',
		link: function(scope){
			
			scope.getItemLabel = (item) => {
				return item.numericId + " - " + item.name;
			}
			
			scope.lookupItems = () => {
				scope.processing = true;
				merchantPickerService.getMerchantPickerList(
				{
					filter: {name: scope.inputPicker},
					limit: 50
				},
				(responseList) => {
					scope.filterList(responseList);
					scope.sourceList = responseList;
				},
				() => {}, 
				() => {});
			};

			autocompleteService.initAutocomplete(scope);
	    }

	};
});