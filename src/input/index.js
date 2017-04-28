const Block = require('../block');
const template = require('./template');

const types = {
    text: require('../input-text')
};

class Input extends Block {
    static get tagName() {
        return 'b-input';
    }

    static get types() {
        return types;
    }

    static get reflectedProperties() {
        return {
            label: null,
            value: null,
            type: 'text',
            placeholder: null,
            error: null,
            name: null
        };
    }

    get template() {
        return template(this);
    }
}

window && window.customElements.define(Input.tagName, Input);

module.exports = Input;