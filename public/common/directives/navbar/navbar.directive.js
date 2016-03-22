(function() {
  'use strict';

  angular
    .module('tracker')
    .directive('mainNav', mainNav);

  /** @ngInject */
  function mainNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/navbar/navbar.html',
      bindToController: true,
      controller: NavbarController,
      controllerAs: 'nav'
    };

    return directive;
  }

  function NavbarController($sessionStorage, $state, $location) {
    var vm = this;
    vm.currentUser = $sessionStorage.user;
    vm.location = $location;
    vm.signOut = function() {
      $sessionStorage.$reset();
      $state.go('login');
    }
  }

})();
  