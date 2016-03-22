(function(){
  'use strict';

  angular
  .module('tracker')
  .controller('trackingController', trackingController);

  function trackingController($http, $sessionStorage, $localStorage, requestService) {
    var vm = this;
    vm.tracker = {};

    vm.datosUser = $sessionStorage.user;
    vm.currentClient = vm.datosUser.clients[$localStorage.client]._id;
    vm.currentClientWorks = vm.datosUser.clients[$localStorage.client].works;

    // Creates a new work
    vm.createTodo = function(tracking){
      var today =  moment().format('D/M/YYYY');
      vm.tracker = angular.copy(tracking);
      vm.tracker.day = today;

      requestService.createWork(vm.tracker)
        .success(function(data){
          console.log(data);
          vm.currentClientWorks.push(data);
          vm.info = data._id;
          var hours = data.hours;

          var idis = {
            idClient : vm.currentClient,
            idWork : vm.info
          }

        requestService.clientUpdate(idis)
          .success(function(data){
            console.log(data)
          })
          .error(function(data){
            console.log('Error: ' + data);
          });
        })
        .error(function(data){
          console.log('Error: ' + data);
        });
    }

    // Calculates the time between startTime and endTime
    vm.calculate = function(tracking) {
      vm.tracker = angular.copy(tracking);
      vm.start = vm.tracker.startTime;
      vm.end = vm.tracker.endTime;
      
      vm.total = moment.duration(moment(vm.end).diff(moment(vm.start)));
      vm.hours = Math.floor(vm.total.asHours());
      vm.minutes = Math.floor(vm.total.asMinutes());
      vm.complete = vm.hours+"."+(vm.minutes-(vm.hours*60));
    }
  }
})();
