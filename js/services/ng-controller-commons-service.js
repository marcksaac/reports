app.service('controllerCommonsService', function(){
	
	this.init = function(scope){

		scope.processing = false;

		scope.downloadFile = (data, filename) => {
			var blob = new Blob([data], { type: 'text/plain' });
			var link = document.createElement('a');
			link.href = window.URL.createObjectURL(blob);
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}

		scope.always = () => {
			scope.processing = false;
			if(isNotNull(scope.customAlwaysCallback)) {
				scope.customErrorCallback(errorResponse);
			}
		}
		
		scope.handleError = (errorResponse) => { 
			if (errorResponse.data !== null && errorResponse.data.message !== null) {
				toastr.error(errorResponse.data.message, 'Error');
			} else {
				toastr.error('Error');
			}
			if(isNotNull(scope.customErrorCallback)) {
				scope.customErrorCallback(errorResponse);
			}
		};
		
		scope.handleSuccess = () => {
			toastr.info("Cambios guardados", 'ok');
			if(isNotNull(scope.customSuccessCallback)) {
				scope.customSuccessCallback();
			}
		}
	}
	
});