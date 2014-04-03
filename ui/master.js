require.config({
    baseUrl: './',
    packages: [
        {
            name: 'jquery',
            location: 'ui/libs/jquery',
            main: 'jquery-1.8.2.min.js'
        }
    ],
    shim: {
        'jquery/initControls': ['jquery'],
        'jquery/ui.widget': ['jquery'],
        'jquery/fancybox/jquery.fancybox': ['jquery']
    }
});

require(['jquery', 'jquery/initControls'], function($){
    $(function(){
        $('body').initControls();
    });
});