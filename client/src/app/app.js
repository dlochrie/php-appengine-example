goog.provide('photogallery.app');


goog.require('photogallery.categories.module');
goog.require('photogallery.config');
goog.require('photogallery.gallery.module');
goog.require('photogallery.home.module');


/**
 * Definition for the application root module. This is the entry point into
 * the application.
 */
photogallery.app.module = angular.module('photogallery', [
  'ui.bootstrap',
  'ui.router',
  photogallery.categories.module.name,
  photogallery.gallery.module.name,
  photogallery.home.module.name
]).config(photogallery.config);
