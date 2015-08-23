goog.provide('photogallery.categories.module');

goog.require('photogallery.categories.CategoriesService');


/**
 * The categories module definition.
 * @return {!angular.Module}
 */
photogallery.categories.module = angular.module('photogallery.categories', []).
    service('categories', photogallery.categories.CategoriesService);
