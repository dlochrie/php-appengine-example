var url = require('url');


/**
 * Exposes the base Page.
 * @type {Page}
 */
module.exports = Page;



/**
 * The (base) Page constructor.
 * All protractor page files should inherit from this Page class.
 * @constructor
 */
function Page() {
  var self = this;

  /**
   * Navigates to the supplied url, or the url defined on the page (this.page).
   * @param {string=} opt_url The optional url to navigate to.
   */
  this.navigate = function(opt_url) {
    var path;
    // Build a full path the to location. "baseUrl" should provide the base
    // part of the url, and should be set in the conf.
    if (opt_url && (typeof opt_url == 'string' || opt_url instanceof String)) {
      path = opt_url;
    } else {
      path = self.url;
    }
    // Return the combined (and properly-formatted) URL.
    browser.get(url.resolve(browser.baseUrl, path));
  };
}
