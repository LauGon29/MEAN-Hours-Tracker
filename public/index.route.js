(function() {
  'use strict';

  angular
    .module('tracker')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/logIn/logIn.html',
        controller: 'LogInController',
        controllerAs: 'login'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register/register.html',
        controller: 'registerController',
        controllerAs: 'register'
      })
      .state('clients', {
        url: '/clients',
        templateUrl: 'views/clients/clients.html',
        controller: 'ClientController',
        controllerAs: 'clientCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.modal', {
        url: '/newTracking',
        templateUrl: 'views/newTracking/tracking.html',
        controller: 'trackingController',
        controllerAs: 'newTracker'
      })
      .state('reports', {
        url: '/reports',
        templateUrl: 'views/reports/reports.html',
        controller: 'ReportController',
        controllerAs: 'reports'
      })


    $urlRouterProvider.otherwise('/login');
  }

})();
