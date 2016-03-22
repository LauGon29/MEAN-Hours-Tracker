(function() {
  'use strict';

  angular
    .module('tracker')
    .directive('mainHeader', mainHeader);

  /** @ngInject */
  function mainHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/header/header.html',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

})();
