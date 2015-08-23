var gallery = require('./gallery-page');

describe('gallery page', function() {
  it('should load the page', function() {
    gallery.navigate();

    // Assert that the correct text appears for the following elements.
    expect(gallery.homeText.getText()).toEqual('Lots of good text here.');
  });
});
