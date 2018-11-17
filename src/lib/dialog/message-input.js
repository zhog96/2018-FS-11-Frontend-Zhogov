import React, { Component } from 'react';
import FormInput from './form-input.js';
import '../../css/dialog/message-input.css';

class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    handleSubmit = (text) => {
        if(text === "") return;
        this.props.handleSubmit({text: text, side: "right", attachs: []});
    }

    processFiles = (attachs) => {
        if(attachs.length === 0) return;
        this.props.handleSubmit({text: "", side: "right", attachs: attachs});
    }    

    attachFiles = () => {
        this.fileInput.current.click();
    }

    render() {
        return (
            <div className="MessageInput">
		        <FormInput handleSubmit={this.handleSubmit} />
                <button className="MessageInput-attachButton" ref={this.buttonAttach} onClick={this.attachFiles}>
                    A
                </button>
                <input className="MessageInput-fileInput" type="file" ref={this.fileInput} onChange={(event) => this.processFiles(event.target.files)} multiple/>
            </div>
        );
    }
}

export default MessageInput;
