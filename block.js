define(function (require, exports, module) {
    //requirements
    var get = require('bower_components/get/get'),
        set = require('bower_components/set/set'),
        deepExtend = require('bower_components/deepExtend/deepExtend'),
        makeClass = require('bower_components/makeClass/makeClass'),

        Backbone = require('bower_components/backbone/backbone'),
        _ = require('bower_components/lodash/lodash'),
        $ = require('jquery');

    var View = Backbone.View;

    return makeClass(View, {

        constructor: function () {

            var block = this;

            var initialize = block.initialize,
                render = block.render;

            block.initialize = function (data) {

                block.stopListening();

                deepExtend(block, block.defaults, data);

                block._ensureElement();

                block.trigger('initializing');

                return $.when(initialize.apply(block, arguments)).then(function () {
                    block.trigger('initialized');
                    block.render();
                    block.trigger('rendered');
                });
            };

            block.render = function (data) {

                deepExtend(block, data);

                return render.apply(block, arguments);
            };

            block.cid = _.uniqueId('block');

            block.initialize.apply(this, arguments);

            block.delegateGlobalEvents();
        },

        globalEvents: {},
        events: {},
        defaults: {},
        children: [],
        blocks: {},
        innerTemplate: false,

        render: function () {

            var block = this,
                originalBlocks = _.clone(block.blocks);

            block.delegateEvents();

            if (block.template) {
                block.setElement($(block.template(block)).replaceAll(block.el));
                block.el.id = block.get('id');
            }

            block.removeBlocks();

            block.initBlocks();

            block.el.block = block;

            block.blocks = originalBlocks;

        },

        get: function () {

            var block = this,
                args = [block].concat([].slice.call(arguments));

            return get.apply(null, args);
        },

        set: function () {

            var block = this,
                args = [block].concat([].slice.call(arguments)),
                __set = set.apply(null, args);

            block.trigger('set', __set);

            return __set;
        },

        block: function (constructor, params) {

            var block = this,
                id = _.uniqueId('tmp-'),
                placeholder = '<b block="' + id + '"></b>';

            block.blocks[id] = function (opt) {
                return constructor.call(block, _.extend(opt, params));
            };

            return placeholder;
        },

        initBlocks: function () {

            var block = this,
                $blocks = block.$('[block]');

            $blocks.each(function () {
                var placeholder = this,
                    blockName = placeholder.getAttribute('block'),
                    params = _.extend({}, placeholder.dataset, {
                        el: placeholder,
                        parentBlock: block
                    }),
                    constructor = block.blocks[blockName];

                block.initBlock(constructor, params);

            });
        },

        initBlock: function (constructor, params) {

            var block = this,
                child = constructor.call(block, _.extend({}, params, {
                    parentBlock: block
                }));

            block.children.push(child);

            if (child && child.el) {
                child.el.removeAttribute('block');
            }

            return child;
        },

        remove: function () {

            var block = this;

            block.stopListening();
            block.undelegateEvents();
            $(document).off('.' + block.cid);

            block.removeBlocks();

            if (!block.innerTemplate){
                View.prototype.remove.apply(block, arguments);
            }
        },

        removeBlocks: function () {

            var block = this;

            _.each(block.children, function (blockToRemove) {

                if (blockToRemove && typeof blockToRemove.remove === 'function') {
                    blockToRemove.remove();
                }

            });

            block.children = [];
        },

        trigger: function (event, data) {

            var block = this;

            block.$el.trigger(event, data);

            return View.prototype.trigger.apply(block, arguments);
        },

        delegateGlobalEvents: function () {

            var block = this;

            $(document).off('.' + block.cid);

            _.each(block.globalEvents, function (handler, event) {
                var path = event.split(' '),
                    eventName = path.shift();

                if (path.length) {
                    $(document).on(eventName + '.' + block.cid, path.join(' '), handler.bind(block));
                } else {
                    $(document).on(eventName + '.' + block.cid, handler.bind(block));
                }

            });
        }
    });
});
