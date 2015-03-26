define(function (require, exports, module) {
    //requirements
    var Block = require('kit/block/block');

    return Block.extend({
        render: function () {

            var block = this;

            var _super = Block.prototype.render.apply(block, arguments);

            block.$thumbList = block.$('.promo__thumbList');
            block.$gallery = block.$('.promo__gallery');

            return _super;
        },
        events: {
            'click .promo__thumbLink': function (e) {

                e.preventDefault();

                var block = this,
                    index = block.$thumbList.find('.promo__thumbItem').index($(e.target).closest('.promo__thumbItem'));

                block.$gallery.find('.promo__galleryImg').eq(index)
                    .addClass('promo__galleryImg_visible')
                    .siblings('.promo__galleryImg')
                    .removeClass('promo__galleryImg_visible');

                return false;
            }
        }
    });
});