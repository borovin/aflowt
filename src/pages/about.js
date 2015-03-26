define(function (require) {

    var Page = require('kit/page/page');

    return Page.extend({
        blocks: {
            promo: require('blocks/promo/promo')
        }
    });
});