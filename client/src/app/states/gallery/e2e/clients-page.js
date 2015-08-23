var util = require('util'),
    Page = require('../../../page');


/**
 * Exposes the gallery Page.
 * @type {gallery}
 */
module.exports = new gallery;

// The gallery class inherits from the Page class.
util.inherits(gallery, Page);



/**
 * Constructor for the gallery Page.
 * @constructor
 */
function gallery() {
  /**
   * The url this page can be reached at.
   * @type {string}
   */
  this.url = '/#/gallery/home';

  /**
   * The *very generic* selector for text on the Client's home page.
   * @type {!angular.JQLite}
   */
  this.homeText = element(by.css('.container p'));

  // Extend this module's prototype with the base Page module.
  Page.call(this);
}
