import shadowStyles from './shadow.css';
import FormMessage from '../form/-message';

const slotName = 'message-list';

const template = `
	<style>${shadowStyles.toString()}</style>
	<form class="main-form">
	</form>
`;

class MessageList extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = template;
        this._initElements();
        this._addHandlers();
        this.addMessage(null, '#shiza Hello', null);
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
    }

    addMessage(event, text, file) {
        let mess2 = document.createElement('form-message');
        mess2.setAttribute('download', 'No');
        if(text.indexOf("#shiza") == 0) {
            mess2.setAttribute('side', 'left');
            mess2.shadowRoot.querySelector('p').innerHTML = text.substr(7);
        } else {
            mess2.setAttribute('side', 'right');
            mess2.shadowRoot.querySelector('p').innerHTML = text;
        }
    
        var formData = new FormData();

        if(file != null) {
            formData.append('files', file);
        }

        formData.append('text', text);

        fetch('http://localhost:8081/message', {
            method: 'POST',
            body: formData
        }).then(function(response) {
            if(response.status == 200) {
                mess2.setAttribute('download', 'Yes');
            } else {
                console.log('failed to save messages, response status : ' + response.status.toString());
            }
        });

        if(file != null) {
            mess2.addFile(file);
        }

        this._elements.form.appendChild(mess2);
    }

    processFiles(event, files) {
        let len = files.length;

        for (let i = 0; i < len; i++) {
            console.log('Filename: ' + files[i].name);
            console.log('Type: ' + files[i].type);
            console.log('Size: ' + files[i].size + ' bytes');
            
            this.addMessage(event, '', files[i]);
        }
    }
}

customElements.define('message-list', MessageList);
