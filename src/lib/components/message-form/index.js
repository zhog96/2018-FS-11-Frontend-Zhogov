import shadowStyles from './shadow.css';

const slotName = 'message-input';

const template = `
	<style>${shadowStyles.toString()}</style>
	<form class="main-form">
		<form-input class="form-input" name="message_text" placeholder="Message" slot="message-input">
			<span slot="icon"></span>
		</form-input>
        <button class="attach" id="attach">
        A
        </button>
        <input class="fileInput" type="file" multiple id="fileInput"/>
	</form>
`;

class MessageForm extends HTMLElement {
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
        const form_input = this.shadowRoot.querySelector('.form-input');
        const message_list = document.body.querySelector('message-list');
        const attach =  this.shadowRoot.querySelector('.attach');
        const fileInput = this.shadowRoot.querySelector('.fileInput');
        this._elements = {
            form,
            form_input,
            message_list,
            attach,
            fileInput
        };
    }

    _addHandlers() {
        this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
        this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
        this._elements.form.addEventListener('click', this._attachFiles.bind(this));
        //this._elements.form.addEventListener('change', this._attachFiles.bind(this));

        this._elements.form.addEventListener('dragover', function(event) {
            event.preventDefault();
        }, false);
        this._elements.form.addEventListener('drop', this._attachFiles.bind(this), false);
        // this._elements.inputSlot.addEventListener('slotchange', this._onSlotChange.bind(this));
    }

    _onSubmit(event) {
        //this._elements.message.innerText = Array.from(this._elements.form.elements).map(
        //    el => el.value,
        //).join(', ');
        let val = this._elements.form_input._elements.input.value;
        if(val != '') {
            this._elements.message_list.addMessage(event, val);
            this._elements.form_input._elements.input.value = '';
        }

        event.preventDefault();
        return false;
    }

    _onKeyPress(event) {
        if (event.keyCode == 13) {
            this._elements.form.dispatchEvent(new Event('submit'));
        }
    }

    _attachFiles(event) {
        if (event.type == 'change') {
            if(event.target.matches('#fileInput, #fileInput *')) {
                console.log(event);
                //I didn't find files here, I'm ready to do it later :)
            }
        }
        if (event.type == 'drop') {
            event.preventDefault();
            this.processFiles(event.dataTransfer.files);     
        }
        if (event.target.matches('#attach, #attach *')) {
            this._elements.fileInput.click();
        }
    }

    processFiles(files) {
        //let len = files.length;
        //for (let i = 0; i < len; i++) {
        //    console.log("Filename: " + files[i].name);
        //    console.log("Type: " + files[i].type);
        //    console.log("Size: " + files[i].size + " bytes");
        //}
        this._elements.message_list.processFiles(files);
    }
}

customElements.define('message-form', MessageForm);
