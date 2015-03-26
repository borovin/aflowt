define(function (require) {

    var Page = require('kit/page/page');

    return Page.extend({
        blocks: {
            productGallery: require('blocks/productGallery/productGallery')
        }
    });
});