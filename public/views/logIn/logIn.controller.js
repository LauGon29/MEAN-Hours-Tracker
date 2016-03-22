(function() {
  'use strict';
  
  angular
    .module('tracker')
    .controller('LogInController', LogInController);

    function LogInController($http, $location, $sessionStorage, $state) {
      var vm = this;

      //Request the tracker info
      $http.get('/users')
        .success(function(data) {
            vm.info = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

      vm.login = function(user) {
        vm.infoUser = angular.copy(user);
        $http.post('/login', vm.infoUser)
        .success(function(data){
          console.log(data);
          vm.user = data; 
          $sessionStorage.user = vm.user;
          $location.path('clients');
        })
        .error(function(data){
          console.log('Error: ' + data);
        });
      }

    }// end logincontroller

})();
