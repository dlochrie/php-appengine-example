goog.provide('photogallery.categories.CategoriesService');



/**
 * The Categories Service.
 * @constructor
 */
photogallery.categories.CategoriesService = function() {
  this.list = [{
    title: 'Food',
    description: 'Images that delight!',
    promoted: 'http://goo.gl/bPT3cz'
  }, {
    title: 'Travel',
    description: 'Images and scenes from far-off places.',
    promoted: 'http://goo.gl/JFi64v'
  }, {
    title: 'Cityscapes',
    description: 'Sights and architecture from cities around the globe.',
    promoted: 'http://goo.gl/kbA2ub'
  }, {
    title: 'Nature',
    description: 'Scenes from the outdoors.',
    promoted: 'http://goo.gl/toF9iD'
  }];
}
