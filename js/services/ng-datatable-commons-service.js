app.service('datatableCommonsService', function () {

	this.init = function (scope) {
		scope.page = 1;
		scope.list = [];

		scope.loadList = (response) => {
			scope.list = response;
		}

		scope.columns = [];

		scope.hasColumn = (column) => {
			for (const i in scope.columns) {
				if (column === scope.columns[i]) {
					return true;
				}
			}
			return false;
		}

		scope.search = () => {
			scope.page = 1;
			scope.sendRequestForList();
		};

		scope.$watch('page', function(newText){
			if (isNull(newText)) {
				scope.page = 1;						
			} else {
				scope.page = newText;
			}
			scope.tableRequest.offset = (scope.page - 1) * scope.tableRequest.limit;
			scope.sendRequestForList();
		  });

		scope.sendRequestForList = () => {
			if (scope.processing) {
				return;
			}
			scope.processing = true;
			scope.getList();
		};

	}

});