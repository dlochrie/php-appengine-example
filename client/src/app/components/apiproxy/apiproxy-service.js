goog.provide('photogallery.apiproxy.ApiProxyService');

goog.require('goog.string.format');



/**
 * The ApiProxy Service.
 * @param {!angular.$http} $http The Angular HTTP Service.
 * @constructor
 * @ngInject
 * @export
 */
photogallery.apiproxy.ApiProxyService = function($http) {
  /**
   * Private reference to the Angular HTTP service.
   * @private {!angular.$http}
   */
  this.http_ = $http;

  /**
   * The URL prefix for requests. For now this is static, and should be
   * configured elsewhere.
   * @private {string}
   */
  this.urlPrefix_ = 'http://172.20.144.157:3000';

  /**
   * ID/Path to a static (REAL) client.
   * TODO(dlochrie): Remove this once we have a login process.
   * @private {string}
   */
  this.staticClient_ = 'experts/yq';
};


/**
 * Adds a Resource for a given model.
 * @param {string} modelName The name of the model to add a resource to.
 * @param {!Object} modelData The content of the model.
 * @return {!angular.$q.Promise} Promise containing the response.
 * @export
 */
photogallery.apiproxy.ApiProxyService.prototype.add = function(
    modelName, modelData) {
  return this.http_.post(this.getUrl_(modelName), modelData);
};


/**
 * Fetches all records for a given model.
 * @param {string} url  The partial url for the request.
 * @return {!angular.$q.Promise} Promise containing the response.
 * @export
 */
photogallery.apiproxy.ApiProxyService.prototype.all = function(url) {
  return this.http_.get(this.getUrl_(url));
};


/**
 * Fetches one records for a given model.
 * @param {string} url  The partial url for the request.
 * @param {number} id The id of the resource to get data for.
 * @return {!angular.$q.Promise} Promise containing the response.
 * @export
 */
photogallery.apiproxy.ApiProxyService.prototype.one = function(url, id) {
  return this.http_.get(this.getUrl_(url, id));
};


/**
 * Formats and returns the URL for most requests.
 * @param {string} url The url to format.
 * @param  {number=} opt_id The (optional) id for the resource.
 * @return {string} The formatted string.
 * @private
 */
photogallery.apiproxy.ApiProxyService.prototype.getUrl_ = function(url, opt_id) {
  var prefix = this.urlPrefix_;
  var expert = this.staticClient_;
  return opt_id ? goog.string.format(url, prefix, expert, opt_id) :
      goog.string.format(url, prefix, expert);
};
