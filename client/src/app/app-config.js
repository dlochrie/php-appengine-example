goog.provide('photogallery.config');


/**
 * Router for the application.
 * @param {!ui.router.$stateProvider} $stateProvider The $stateProvider service.
 * @param {!ui.router.$urlRouterProvider} $urlRouterProvider The
 *     $urlRouterProvider service.
 * @ngInject
 * @export
 */
photogallery.config = function($stateProvider, $urlRouterProvider) {
  // Set the default redirect for any missing route.
  $urlRouterProvider.otherwise('/');
};
