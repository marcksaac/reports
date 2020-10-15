app.service('userService', function(requestService, $cookies){
	
	this.user = null;
	
	this.getUser = () =>{
		if (isNull(this.user)) {
			this.user = $cookies.get('user');
		}
		return this.user;
	};

	this.isLogged= () => {
		return isNotNull(this.user);
	}

	this.isNotLogged= () => {
		return isNull(this.user);
	}

	this.hasAction = (action) => {
		var user = this.getUser();
		if (isNull(user)) {
			return false;
		}
		var actions = user.actions;
		if (isEmpty(actions)) {
			return false;
		}
		for (const i in actions) {
			if (action === actions[i]) {
				return true;
			}
		}
		return false;
	}

	this.login = function(login, okCall, handleError, alwaysCall){
		login.password = btoa(login.password);
		requestService.post(login, CONTEXT_PATH + "/login", (response) => {
			this.user = response;
			$cookies.put('user', this.user);
			
			requestService.token = this.user.token;
			$cookies.put('token', this.user.token);
			okCall(response);
		}, 
		handleError, alwaysCall);
	}

	this.logout = function(){
		requestService.token = null;
		this.user = null;
		
		$cookies.remove('user');
		$cookies.put('token');
	}
	
});
