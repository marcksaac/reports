app.service('requestService', function($http, $cookies, $location){

	this.token = null;

	this.getToken = () =>{
		if (isBlank(this.token)) {
			this.token = $cookies.get('token');
		}
		if (isBlank(this.token)) {
			return null;
		}
		return this.token;
	}
	
	this.get = function(data, url, successCall, errorCall, alwaysCall){
		if (data != null) {
			data = "?" + $.param(data);
		} else {
			data = ''
		}
		$http({
			url : url + data,
			method : 'GET',
			headers : {
				'Authorization': this.getToken()
			}
		}).then(
			(response) => {this.defaultSuccessCall(response, successCall, errorCall)},
			(errorResponse) =>{this.defaultErrorCall(errorResponse, errorCall)}
		)['finally'](() => { this.defaultAlways(alwaysCall) });
	}
	
	this.postMultipart = function(data, url, successCall, errorCall, alwaysCall) {
		$http({
			url : url,
			data: data,
			method : 'POST',
			beforeSend: function(xhr) {
                xhr.setRequestHeader(_CSRF_HEADER, _CSRF_TOKEN);
            },
		    headers: {
				'Content-Type': undefined,
				'Authorization': this.getToken()},
		    cache: false,
		    processData: false
		}).then(
			(response) =>{this.defaultSuccessCall(response, successCall, errorCall)},
			(errorResponse) =>{this.defaultErrorCall(errorResponse, errorCall)}
		)['finally'](() => { this.defaultAlways(alwaysCall) });
	}
	
	this.post = function(data, url, successCall, errorCall, alwaysCall) {
		$http({
			url : url,
			data: data,
			method : 'POST',
			headers : {
				'Content-Type': 'application/json',
				'Authorization': this.getToken()
			}
		}).then(
			(response) =>{this.defaultSuccessCall(response, successCall, errorCall)}
		).catch(
			(errorResponse) =>{
				this.defaultErrorCall(errorResponse, errorCall)
			}
		)
		['finally'](() => { this.defaultAlways(alwaysCall) });
	}
	
	this.put = function(data, url, successCall, errorCall, alwaysCall) {
		$http({
			url : url,
			data: data,
			method : 'PUT',
			headers : {'Content-Type': 'application/json',
			'Authorization': this.getToken()
			}
		}).then(
			(response) =>{this.defaultSuccessCall(response, successCall, errorCall)},
			(errorResponse) =>{this.defaultErrorCall(errorResponse, errorCall)}
		)['finally'](() => { this.defaultAlways(alwaysCall) });
	}
	
	this.remove = function(data, url, successCall, errorCall, alwaysCall) {
		$http({
			url : url,
			data: data,
			method : 'DELETE',
			headers : {
				'Content-Type': 'application/json',
				'Authorization': this.getToken()
			}
		}).then(
			(response) =>{this.defaultSuccessCall(response, successCall, errorCall)},
			(errorResponse) =>{this.defaultErrorCall(errorResponse, errorCall)}
		)['finally'](() => { this.defaultAlways(alwaysCall) });
	}

	this.defaultSuccessCall = (response, successCall, errorCall) => {
		if (response.data !== null && response.data.status === 'error') {
			if(isNotNull(errorCall)) {
				errorCall(response);
			}
		} else {
			if(isNotNull(successCall)) {
				successCall(response.data);
			}
		}
		var token = response.headers()["authorization"];
		if(isNotBlank(token)) {
			this.token = token;
			$cookies.put('token', token);
		}
	}

	this.defaultErrorCall = (errorResponse, errorCall) => {
		if(isNotNull(errorCall)) {
			errorCall(errorResponse);
		}
		var status = errorResponse.status;
	/*	if (-1 === status || 407 === status) {
			$location.path(CONTEXT_PATH + "/logout");
		}*/
	}

	this.defaultAlways = (alwaysCall) => {
		if(isNotNull(alwaysCall)) {
			alwaysCall();
		}
	}
	
});
