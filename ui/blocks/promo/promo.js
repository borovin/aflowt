define(
    [
        'jquery',
        'jquery/ui.widget'
    ],
    function($) {
        $.widget('aflowt.promo', {
            _create: function(){

                var $promo__thumbList = this.element.find('.promo__thumbList'),
                    $promo__gallery = this.element.find('.promo__gallery');

                this.element.on('click', '.promo__thumbLink', function(e){
                    var index = $promo__thumbList.find('.promo__thumbItem').index($(this).closest('.promo__thumbItem'));

                    $promo__gallery.find('.promo__galleryImg').eq(index).fadeIn().siblings('.promo__galleryImg').fadeOut();

                    return false;
                })
            }
        });
    }
);