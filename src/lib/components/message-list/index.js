import shadowStyles from './shadow.css';
import FormMessage from '../form/-message';

const slotName = 'message-list';

const template = `
	<style>${shadowStyles.toString()}</style>
	<form class="main-form">
		<form-message class="form-message" side="left">
			<span slot="icon"></span>
		</form-message>
	</form>
`;

class MessageList extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = template;
        this._initElements();
        this._addHandlers();
    }

    static get observedAttributes() {
        return [
            'action',
            'method',
        ];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this._elements.form[attrName] = newVal;
    }

    _initElements() {
        const form = this.shadowRoot.querySelector('.main-form');
        this._elements = {
            form
        };
    }

    _addHandlers() {
        // this._elements.inputSlot.addEventListener('slotchange', this._onSlotChange.bind(this));
    }

    addMessage(event, data) {
        let mess2 = document.createElement('form-message');
        if(data.indexOf("#shiza") == 0) {
            mess2.setAttribute('side', 'left');
            mess2.shadowRoot.querySelector('p').innerHTML = data.substr(7);
        } else {
            mess2.setAttribute('side', 'right');
            mess2.shadowRoot.querySelector('p').innerHTML = data;
        }
        this._elements.form.appendChild(mess2);
    }

    processFiles(files) {
        let len = files.length;
        for (let i = 0; i < len; i++) {
            console.log('Filename: ' + files[i].name);
            console.log('Type: ' + files[i].type);
            console.log('Size: ' + files[i].size + ' bytes');
            
            let mess2 = document.createElement('form-message');
            mess2.setAttribute('side', 'right');
            mess2.shadowRoot.querySelector('p').innerHTML = '';
            mess2.addFile(files[i]);
            this._elements.form.appendChild(mess2);
        }
    }
}

customElements.define('message-list', MessageList);
