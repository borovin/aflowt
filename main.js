require.config({
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        initDom: 'bower_components/initDom/initDom',
        colorbox: 'bower_components/colorbox/jquery.colorbox'
    },
    shim: {
        colorbox: ['jquery']
    }
});

require(['jquery', 'initDom'], function($, initDom){
    $(function(){
        initDom();
    });
});