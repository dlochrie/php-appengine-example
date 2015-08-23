goog.provide('photogallery.gallery.galleryController');

goog.require('goog.array');



/**
 * Gallery Controller.
 * @param {!angular.Scope} $scope The current controller $scope.
 * @param {!ui.router.$state} $state The ui-router state service.
 * @constructor
 * @ngInject
 * @export
 */
photogallery.gallery.galleryController = function($scope, $state, categories) {
  this.galleryName = $state.params.galleryId;

  /**
   * Local reference to the Categories service.
   * @private {!photogallery.categories.CategoriesService}
   */
  this.categories_ = categories;

  var self = this;

  $scope.$watch(function() {
    return $state.params;
  }, function(newValue, oldValue) {
    // If there is a request for a new gallery, update it.
    if (newValue && newValue !== oldValue) {
      self.galleryName = newValue.galleryId;
      self.init_();
    }
  });


  // Initialize defaults.
  this.init_();
};


/**
 * Initialize the controller.
 * @private
 */
photogallery.gallery.galleryController.prototype.init_ = function() {
  var name = this.galleryName;
  this.current =
      photogallery.gallery.galleryController.DEFAULT_GALLERIES_[name];

  // Create a list of categories to show in the menu. If we are already on the
  // category, then don't add it to the list.
  this.availableCategories = goog.array.map(this.categories_.list,
      function(item) {
        if (item.title !== name) {
          item.active = true;
        }
        return item;
      });
};


/**
 * Default list of images per category.
 * @type {!Array.<!Object>}
 */
photogallery.gallery.galleryController.DEFAULT_GALLERIES_ = {
  Food: [{
    title: 'Breakfast',
    url: 'http://goo.gl/Hc06zc'
  }, {
    title: 'Lunch',
    url: 'http://goo.gl/54g9Xd'
  }, {
    title: 'Dinner',
    url: 'http://goo.gl/ehsk0A'
  }],
  Travel: [{
    title: 'Fresh Air',
    url: 'http://goo.gl/JFi64v'
  }, {
    title: 'Sense of Security',
    url: 'http://goo.gl/IMIp9T'
  }, {
    title: 'My Favorite Swimming Hole',
    url: 'http://goo.gl/zTJPBK'
  }],
  Cityscapes: [{
    title: 'Panama City',
    url: 'http://goo.gl/TjJ4L1',
  }, {
    title: 'London',
    url: 'http://7-themes.com/data_images/out/57/6964571-hd-wallpaper-city.jpg',
  }, {}],
  Nature: [{
    title: 'Petting Zoo',
    url: 'http://goo.gl/toF9iD'
  }, {
    title: 'A Natural Habitat',
    url: 'http://goo.gl/QCve85'
  }]
};
