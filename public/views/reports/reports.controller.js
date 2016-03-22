(function(){
	angular
	.module('tracker')
	.controller('ReportController', ReportController)

	function ReportController($http, $sessionStorage, $localStorage, requestService) {
		var vm = this; 
		vm.datosUser = $sessionStorage.user;
    vm.client = vm.datosUser.clients[$localStorage.client];
    vm.costHour = vm.datosUser.clients[$localStorage.client].cost;
  	vm.currentClientWorks = vm.datosUser.clients[$localStorage.client].works;
  	vm.hours = 0;

  	vm.totalHours = function(){
  		for (var i = 0; i < vm.currentClientWorks.length; i++) {
  			var total = vm.currentClientWorks[i].hours;
  			vm.hours += total;
  		}
  	}  	
	}
})();