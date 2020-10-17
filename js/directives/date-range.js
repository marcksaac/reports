app.directive('ngDateRange', () => {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			dateFrom : "=",
			dateTo : "="
		},
        templateUrl: 'templates/fields/date-range.html',
		link: function(scope, $element){
			
			scope.numberLast = 7;
			scope.rangeType = "days";

			scope.selectRange = () => {
				scope.dateTo = new Date();
				switch(scope.rangeType) {
					case "hours":
						scope.dateFrom = DateUtils.subHours(scope.dateTo, scope.numberLast);
					  break;
					case "days":
						var dateFrom = DateUtils.subDays(scope.dateTo, scope.numberLast);
						scope.dateFrom = DateUtils.setAtStartOfDay(dateFrom);
					   break;
					case "months":
						var dateFrom = DateUtils.subMonths(scope.dateTo, scope.numberLast);
						scope.dateFrom = DateUtils.setAtStartOfDay(dateFrom);
					  break;
					default:
				  }
				scope.closeModal();
			}

			scope.openCustomRange = () => {
				$element.find(".openCustomRangeModal").modal('show');
			}

			scope.closeModal = () => {
				$element.find(".openCustomRangeModal").modal('hide');
			}
			
			scope.thisMonth = () => {
				scope.dateTo = new Date();
				scope.dateFrom = DateUtils.setAtStartOfMonth(new Date(scope.dateTo), 1);
			}

			scope.last30Days = () => {
				scope.dateTo = new Date();
				var dateFrom = DateUtils.subMonths(scope.dateTo, 1);
				scope.dateFrom = DateUtils.setAtStartOfDay(dateFrom);
			}

			scope.last3Months = () => {
				scope.dateTo = new Date();
				var dateFrom = DateUtils.subMonths(scope.dateTo, 3);
				scope.dateFrom = DateUtils.setAtStartOfDay(dateFrom);
			}

			scope.last6Months = () => {
				scope.dateTo = new Date();
				var dateFrom = DateUtils.subMonths(scope.dateTo, 6);
				scope.dateFrom = DateUtils.setAtStartOfDay(dateFrom);
			}

			scope.lastMonth = () => {
				scope.dateFrom = DateUtils.setAtStartOfMonth(DateUtils.subMonths(new Date(), 1));
				scope.dateTo = DateUtils.atEndOfDay(DateUtils.setAtStartOfMonth(new Date()) -1);
			}

			scope.thisYear = () => {
				scope.dateTo = new Date();
				scope.dateFrom = DateUtils.setAtStartOfYear(new Date(scope.dateTo));
			}
			
			scope.atStartOfDay = () => {
				var dateFrom = DateUtils.setAtStartOfDay(scope.dateFrom);
				scope.dateFrom = dateFrom;
			}
			
			scope.atEndOfDay = () => {
				var dateTo = DateUtils.atEndOfDay(scope.dateTo);
				scope.dateTo = dateTo;
			}

	    }

	};
});

app.filter('rangeTypeFilter', function() {
	return function(rangeType) {
		var rangeTypes = [];
		rangeTypes['hours'] = "horas";
		rangeTypes['days'] = "dias";
		rangeTypes['months'] = "meses";
		if (isBlank(rangeType)) {
			return "";
		}
		return rangeTypes[rangeType];
	}
});