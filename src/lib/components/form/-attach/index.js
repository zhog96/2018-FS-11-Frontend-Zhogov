import styles from './index.css';
import shadowStyles from './shadow.css';

const template = `
    <style>${shadowStyles.toString()}</style>
    <button> File <button>
    <slot name='icon'></slot>
`;

//NOT READY)))

class FormAttach extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = template;
        this._initElements();
        this._addHandlers();
    }

    static get observedAttributes() {
        return [
            'name'
        ];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this._elements.input[attrName] = newVal;
    }

    _initElements() {
        this._elements = {
        };
    }

    _addHandlers() {
        //this._elements.input.addEventListener('input', this._onInput.bind(this));
    }
}

customElements.define('form-attach', FormAttach);
