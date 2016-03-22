(function(){
	angular
	.module('tracker')
	.service('requestService', requestService);

	function requestService($http){ 

		var getAll = function() {
			return $http.get('/clients/all', client);
		}

		var createUser = function(user) {
			return $http.post('/login', user);
		}

		var createClient = function(client) {
			return $http.post('/client', client);
		} 

		var createWork = function(tracker) {
			return $http.post('/api', tracker);
		}

		var userUpdate = function(idis) {
			return $http.post('/user/update', idis);
		}

		var clientUpdate = function(idis){
			return  $http.post('/client/update', idis);
		}

		var allWorks = function() {
			return $http.get('/api/all');
		} 

		var updateDelete = function(idis) {
			return $http.post('/client/updateDelete', idis);
		}

		return {
			createUser: createUser,
			createClient: createClient,
			createWork: createWork,
			userUpdate: userUpdate,
			clientUpdate: clientUpdate,
			allWorks: allWorks,
			updateDelete: updateDelete,
			getAll: getAll	
		}
	}
})();


