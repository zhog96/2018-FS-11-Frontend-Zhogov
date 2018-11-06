import styles from './index.css';
import shadowStyles from './shadow.css';

const template = `
    <style>${shadowStyles.toString()}</style>
    <button> File <button>
    <slot name='icon'></slot>
`;

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
    }
}

customElements.define('form-attach', FormAttach);
