goog.provide('photogallery.apiproxy.module');

goog.require('photogallery.apiproxy.ApiProxyService');


/**
 * The apiproxy module definition.
 */
photogallery.apiproxy.module = angular.module('photogallery.apiproxy', []).
    service('apiProxyService', photogallery.apiproxy.ApiProxyService);
