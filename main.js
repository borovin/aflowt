require.config({
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        requireDom: 'bower_components/requireDom/requireDom',
        colorbox: 'bower_components/colorbox/jquery.colorbox'
    },
    shim: {
        colorbox: ['jquery']
    }
});

require(['jquery', 'requireDom'], function($, requireDom){
    requireDom();
});