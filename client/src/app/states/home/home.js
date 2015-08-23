goog.provide('photogallery.home.module');

goog.require('photogallery.home.HomeController');
goog.require('photogallery.home.config');


/**
 * The home module definition.
 * @return {!angular.Module}
 */
photogallery.home.module = angular.module('photogallery.home', []).
    config(photogallery.home.config).
    controller('HomeController', photogallery.home.HomeController);
