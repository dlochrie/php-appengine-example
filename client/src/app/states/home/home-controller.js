goog.provide('photogallery.home.HomeController');



/**
 * Home Controller.
 * @param {!angular.Scope} $scope The current controller $scope.
 * @param {!photogallery.categories.CategoriesService} categories The
 *     categories service.
 * @constructor
 * @ngInject
 * @export
 */
photogallery.home.HomeController = function($scope, categories) {
  this.categoriesService = categories;

  // Initialize defaults.
  this.init_();
};


/**
 * Initialize the controller.
 * @private
 */
photogallery.home.HomeController.prototype.init_ = function() {
  this.categories = this.categoriesService.list;
};
