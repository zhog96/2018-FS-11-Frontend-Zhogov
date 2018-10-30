import styles from './index.css';
import shadowStyles from './shadow.css';

const template = `
    <style>${shadowStyles.toString()}</style>
    <slot name="icon"></slot>
    <p>Hello</p>
    <div class="time">10:52<\div>
`;

class FormMessage extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = template;
        this._initElements();
        let now = new Date();
        this.shadowRoot.querySelector('div').innerHTML = now.getHours().toString() + ':' + now.getMinutes().toString();
    }

    static get observedAttributes() {
        return [
            'name',
            'value',
            'side',
        ];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        //this._elements.input[attrName] = newVal;
        if(this.getAttribute('side') != null) {
            this.className = 'form-message' + ' ' + this.getAttribute('side');
            this.shadowRoot.querySelector('p').className = this.getAttribute('side');
        } else {
            this.className = 'form-message' + ' ' + 'right';
            this.shadowRoot.querySelector('p').className = this.getAttribute('right');
        }
    }

    _initElements() {
        this._elements = {
        };
    }

    addFile(file) {
        console.log(file);
        let html = this.shadowRoot.innerHTML;
        this.shadowRoot.innerHTML = `<canvas id='canvas'></canvas>` + html;
        
        let ctx = this.shadowRoot.getElementById('canvas').getContext('2d');
        let img = new Image;
        ctx.imageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 300, 150);
        }
        img.src = URL.createObjectURL(file);
    }
}

customElements.define('form-message', FormMessage);
