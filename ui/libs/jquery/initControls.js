(function($) {

    $.fn.initControl = function(control, options) {

        function init($el, control, options){
            var pluginName = control.split('/').pop().split('.').pop();

            if (typeof $.fn[pluginName] == 'function'){
                $el[pluginName](options);
            } else {
                console.warn("Can't find plugin " + pluginName);
            }

        }

        return this.each(function() {
            var $this = $(this);

            if (typeof require == 'function'){
                try {
                    require([control], function() {
                        init($this, control, options);
                    });
                } catch (error) {
                    console.warn(error);
                }
            } else {
                init($this, control, options);
            }

        });
    };

    $.fn.initControls = function(opt) {
        return this.each(function() {

            var $blocks;

            switch (opt) {
                case 'outer':
                    $blocks = $(this).filter('[control]');
                    break;
                case 'inner':
                    $blocks = $(this).find('[control]');
                    break;
                default:
                    $blocks = $(this).find('[control]').add($(this).filter('[control]'));
                    break;
            }

            $blocks.each(function() {
                var $el = $(this),
                    controls = $el.attr('control'),
                    options = (typeof this.onclick == 'function') ? this.onclick() : {};

                $.each(controls.split(' '), function(i, controlName) {
                    $el.initControl(controlName, options[controlName] || options);
                });
            });
        });
    };
})(jQuery);