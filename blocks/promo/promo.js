define(function(require, exports, module) {
    //requirements
    var $ = require('jquery');

    return function(el){
        var $el = $(el),
            $promo__thumbList = $el.find('.promo__thumbList'),
            $promo__gallery = $el.find('.promo__gallery');

        $el.on('click', '.promo__thumbLink', function(e){

            e.preventDefault();

            var index = $promo__thumbList.find('.promo__thumbItem').index($(this).closest('.promo__thumbItem'));

            $promo__gallery.find('.promo__galleryImg').eq(index)
                .addClass('promo__galleryImg_visible')
                .siblings('.promo__galleryImg')
                .removeClass('promo__galleryImg_visible');

            return false;
        })
    }
});