(function() {
  'use strict';

  angular
    .module('tracker')
    .directive('mainFooter', mainFooter);

  /** @ngInject */
  function mainFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/footer/footer.html',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

})();
