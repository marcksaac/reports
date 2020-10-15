app.service('autocompleteService', function($timeout){
	
	this.initAutocomplete = function(scope){
		scope.inputPicker = '';
		scope.sourceList = [];
		scope.selectedItems = [];
		
		scope.clear = () => {
			scope.lookupItems();
			scope.sourceList = [];
			scope.selectedItems = [];
			scope.target = null;
		}
		
		scope.dropItem = (item) => {
			if (isNull(item)) {
				return;
			}
			scope.addItem(scope.sourceList, item);
			scope.removeItem(scope.selectedItems, item);
			scope.updateTarget();
		}
		
		scope.selectItem = (item) => {
			if (isNull(item)) {
				return;
			}
			scope.addItem(scope.selectedItems, item);
			scope.removeItem(scope.sourceList, item);
			scope.updateTarget();
		}
		
		scope.updateTarget = () => {
			scope.target = [];
			for (var i = 0; i < scope.selectedItems.length; i++) {
				var item = scope.selectedItems[i];
				var idItem = item[scope.field];
				if (!scope.multiple) {
					scope.target = idItem;
					return;
				}
				scope.target.push(idItem);
			}
		}
		
		scope.removeItem = (list, item) => {
			var index = scope.getItemIndex(list, item);
			if (isNull(index)) {
				return;
			}
			list.splice(index, 1);
		}
		
		scope.addItem = (list, item) => {
			var index = scope.getItemIndex(list, item);
			if (isNotNull(index)) {
				return;
			}
			list.push(item);
		}
		
		scope.getItemIndex = (list, item) => {
			var idItem = item[scope.field];
			for (var i = 0; i < list.length; i++) {
				var entry = list[i];
				var idEntry = entry[scope.field];
				if (idItem === idEntry) {
					return i;
				}
			}
			return null;
		}

		scope.isEmpty = (element) => {
			return isEmpty(element);
		}
		
		scope.filterList = (list) => {
			for (var i = 0; i < scope.selectedItems.length; i++) {
				var entry = scope.selectedItems[i];
				scope.removeItem(list, entry);
			}
		}
		
		scope.currentLookup = null;
		scope.executeLookup = () => {
			if (isNull(scope.currentLookup)) {
				return;
			}
			scope.currentLookup();
			scope.currentLookup = null;
		};
		
      scope.$watch('inputPicker', function(newText){

    	  	scope.inputPicker = newText;
  		if (isNotEmpty(scope.inputPicker) && scope.inputPicker.length > 2) {
  			$timeout(scope.executeLookup, 2000);
  			scope.currentLookup = () => {	  				
  				scope.lookupItems();
  			}
  		}
      });

      scope.lookupItems();
		
		scope.$watch('target', function(newValue) {
          if (isEmpty(newValue)) {
        	  	scope.clear();
          }
      });
	}
	
});