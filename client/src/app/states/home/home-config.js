goog.provide('photogallery.home.config');


/**
 * Provides configuration for the home module, including routes and redirects.
 * @param {!ui.router.$stateProvider} $stateProvider The $stateProvider service.
 * @param {!ui.router.$urlRouterProvider} $urlRouterProvider The
 *     $urlRouterProvider service.
 * @ngInject
 */
photogallery.home.config = function($stateProvider, $urlRouterProvider) {
  $stateProvider.
      state('home', {
        url: '/',
        templateUrl: 'app/states/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      }).
      state('about', {
        url: '/about',
        templateUrl: 'app/states/home/partials/about.html',
      });
};
