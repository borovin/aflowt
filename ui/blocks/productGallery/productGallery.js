define(
    [
        'jquery',
        'jquery/ui.widget',
        'jquery/fancybox/jquery.fancybox'
    ],
    function($) {
        $.widget('aflowt.productGallery', {
            _create: function(){
                $('.productGallery__largePreview, .productGallery__thumbLink', this.element).fancybox();
            }
        });
    }
);