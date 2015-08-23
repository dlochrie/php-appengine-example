goog.provide('photogallery.gallery.config');


/**
 * Provides configuration for the gallery module, including routes and
 * redirects.
 * @param {!ui.router.$stateProvider} $stateProvider The $stateProvider service.
 * @param {!ui.router.$urlRouterProvider} $urlRouterProvider The
 *     $urlRouterProvider service.
 * @ngInject
 */
photogallery.gallery.config = function($stateProvider, $urlRouterProvider) {
  // Set the default redirect for any missing route.
  $urlRouterProvider.otherwise('/');

  $stateProvider.
      state('gallery', {
        url: '/gallery',
        templateUrl: 'app/states/gallery/gallery.html',
        controller: 'galleryController',
        controllerAs: 'galleryCtrl'
      }).
      state('gallery.show', {
        url: '/:galleryId',
        templateUrl: 'app/states/gallery/partials/show.html'
      });
};
