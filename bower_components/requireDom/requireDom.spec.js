define(function(require, exports, module) {
    //requirements
    var requireDom = require('./requireDom');

    describe(module.id, function(){

        afterEach(function(){
            document.body.innerHTML = '';
        });

        it('load and init anonymous AMD module', function(done){
            var div = document.createElement('div');

            div.setAttribute('require', 'path/to/anonymousModule');

            document.body.appendChild(div);

            requireDom();

            var interval = setInterval(function(){
                if (div.classList.contains('initialized')){
                    clearInterval(interval);
                    done();
                }
            }, 100);
        }, 7000);
    });
});