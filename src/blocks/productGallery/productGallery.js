define(function(require, exports, module) {

    var Block = require('kit/block/block');

    require('bower_components/colorbox/jquery.colorbox');

    return Block.extend({
        render: function(){

            var block = this;

            var _super = Block.prototype.render.apply(block, arguments);

            block.$('.productGallery__largePreview, .productGallery__thumbLink').colorbox();

            return _super;
        }
    });
});