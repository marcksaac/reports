app.service('merchantPickerService', function(requestService){
	
	this.getMerchantPickerList = function(filter, successCall, errorCall, alwaysCall){
		requestService.post(filter, CONTEXT_PATH + "/v1/merchants",
				successCall, errorCall, alwaysCall);
	}
	
});