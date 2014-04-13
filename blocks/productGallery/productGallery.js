define(function(require, exports, module) {
    //requirements
    var $ = require('jquery');

    require('colorbox');

    return function(el){
        $('.productGallery__largePreview, .productGallery__thumbLink', el).colorbox();
    }
});