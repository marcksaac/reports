app.directive('scrollToItem', function() {
    return {
        restrict: 'A',
        scope: {
            scrollto: "@"
        },
        link: function(scope, $element) {

            $element.on('click', function() {
                $('html,body').animate({scrollTop: $(scope.scrollto).offset().top }, "slow");
            });
        }
    };
});

app.directive('dataAos', function () {
    return {
        restrict: 'A',
        controller: function(){
            AOS.refresh();
        }
    };
});

app.directive('convertToNumber', function() {
	return {
	  require: 'ngModel',
	  link: function(scope, element, attrs, ngModel) {
		ngModel.$parsers.push(function(val) {
		  return val != null ? parseInt(val, 10) : null;
		});
		ngModel.$formatters.push(function(val) {
		  return val != null ? '' + val : null;
		});
	  }
	};
  });

  app.directive('capitalize', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        var capitalize = function(inputValue) {
          if (inputValue == undefined) inputValue = '';
          var capitalized = inputValue.toUpperCase();
          if (capitalized !== inputValue) {
            // see where the cursor is before the update so that we can set it back
            var selection = element[0].selectionStart;
            modelCtrl.$setViewValue(capitalized);
            modelCtrl.$render();
            // set back the cursor after rendering
            element[0].selectionStart = selection;
            element[0].selectionEnd = selection;
          }
          return capitalized;
        }
        modelCtrl.$parsers.push(capitalize);
        capitalize(scope[attrs.ngModel]); // capitalize initial value
      }
    };
   }
);

app.directive('numericOnly', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {

            modelCtrl.$parsers.push(function (inputValue) {
                var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g,'') : null;

                if (transformedInput!=inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
});

app.directive('allowsAlphanumeric', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {

            modelCtrl.$parsers.push(function (inputValue) {
                var transformedInput = inputValue ? inputValue.replace(/[^0-9a-zA-Z|*_\s]/g,'') : null;

                if (transformedInput!=inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
});

app.directive('openInput', function(){
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, modelCtrl) {
			
			modelCtrl.$parsers.push(function (inputValue) {
				var transformedInput = inputValue ? inputValue.replace(/[^0-9a-zA-Z|áéíóúÁÉÍÓÚñÑ´,.-:*@_\s]/g,'') : null;
				
				if (transformedInput!=inputValue) {
					modelCtrl.$setViewValue(transformedInput);
					modelCtrl.$render();
				}
				
				return transformedInput;
			});
		}
	};
});

app.directive('dropdown', function () {
    return {
        restrict: 'A',
        controller: function(){
        		$('.dropdown-toggle').dropdown()
        }
    };
});

$(".only-digits").on("keypress keyup blur" , function (event) {
	 $(this).val($(this).val().replace(/[^\d]/g,''));
    if ((event.which != 46) && (event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
});