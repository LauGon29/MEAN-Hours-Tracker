(function(){
  'use strict';

  angular
    .module('tracker')
    .controller('MainController', MainController);

    function MainController($scope, $http, $sessionStorage, $localStorage, requestService){
      var main = this;

      main.datosUser = $sessionStorage.user;
      main.client = main.datosUser.clients[$localStorage.client];
      main.currentClient = main.datosUser.clients[$localStorage.client]._id;
      main.currentClientWorks = main.datosUser.clients[$localStorage.client].works;
      main.filtered = main.currentClientWorks;

      $scope.$watch(function(){
        return localStorage.getItem('day');
      }, function(day) {
        main.selectedDay = new Date(day);
        var formatDay = main.selectedDay.toLocaleDateString();
        // main.dayy = selectedDay
        main.filterData(formatDay);   
      })      

      // Deletes an work
      main.destroy = function(id) {
        $http.delete('api/delete/' + id)
        .success(function(data) {
          main.currentClientWorks.splice(main.currentClientWorks.indexOf(id), 1);

          var idis = {
            idClient : main.currentClient,
            idWork : id
          }

          //Updates the client's works
          requestService.updateDelete(idis)
            .success(function(data){
              console.log(data);
            })
            .error(function(data){
              console.log('Error' + data);   
            })
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
      };

      // Filters the works by date selected
      main.filterData = function(selected) {
        main.filtered = main.currentClientWorks.filter(function(item){     
          var isTrue = item.day === selected;
          if(isTrue){
            return isTrue;
          } else {
            console.log('error');
          }
        })
      }
    }//end MainController
})();


