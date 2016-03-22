(function() {
  angular
    .module('tracker')
    .controller('registerController', registerController);

    function registerController($http,$state,$sessionStorage, requestService) {
      var vm = this;
      vm.user = {};

      vm.newUser = function(user){
        vm.user = angular.copy(user);

        $http.post('/user', vm.user)
        .success(function(data){
          vm.user = user;

        // This logs the user immediately after to create a new user
        requestService.createUser(vm.user)
          .success(function(data){
            console.log(data);
            vm.user = data; 
            $sessionStorage.user = vm.user;
            $state.go('clients');
          })
          .error(function(data){
            console.log('Error: ' + data);
          });
          //end login
        })
        .error(function(data){
          console.log('Error: ' + data);
        });
      }
    }

})();