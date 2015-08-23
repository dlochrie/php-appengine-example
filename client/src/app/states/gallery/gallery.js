goog.provide('photogallery.gallery.module');

goog.require('photogallery.gallery.config');
goog.require('photogallery.gallery.galleryController');


/**
 * The gallery module definition.
 * @return {!angular.Module}
 */
photogallery.gallery.module = angular.module('photogallery.gallery', []).
    controller('galleryController', photogallery.gallery.galleryController).
    config(photogallery.gallery.config);
