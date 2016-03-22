(function(){
  'use strict';

  angular
  .module('tracker')
  .controller('ClientController',ClientController);

  function ClientController($http, $sessionStorage, $localStorage, $location, requestService) {
    var vm = this;
    vm.client = {};
    vm.session_user = $sessionStorage.user._id;
    vm.currentClients = $sessionStorage.user.clients;

    // Creates a new client
    vm.addClient = function(client){
      vm.client = angular.copy(client);
      
      requestService.createClient(vm.client)
        .success(function(data){
          console.log(data);
          vm.clientInfo = data._id;
          vm.currentClients.push(data);

            var idis = {
            idUser : vm.session_user,
            idClient : vm.clientInfo
          }
          
          requestService.userUpdate(idis)
          .success(function(data){
            console.log(data)
          })
          .error(function(data){
            console.log('Error: ' + data);
          });
          
        })
        .error(function(data){
          console.log('Error: ' + data);
        })
    }

    vm.selectedClient = function(client) {
      vm.currentClient = client;
      $localStorage.client = vm.currentClient;
      $location.path('home');
    }
  }
})();