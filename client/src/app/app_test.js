goog.require('goog.array');

describe('Router', function() {
  var scope, state, location, link, homePath;

  beforeEach(module('photogallery'));
  beforeEach(module('photogallery.home'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function($rootScope, $location, $state, $templateCache) {
    scope = $rootScope;
    location = $location;
    state = $state;

    // The root, or home path.
    homePath = '/';
  }));

  it('should redirect to the home page with an invalid url', function() {
    // In order to assert that we are redirected home ("/"), we must also
    // require the "home.module".
    var testCases = [undefined, null, 0, 1, '', '///'];
    goog.array.forEach(testCases, function(url) {
      location.url(url);
      scope.$apply();
      expect(state.current.url).toEqual(homePath);
    });
  });
});
