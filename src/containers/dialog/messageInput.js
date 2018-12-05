import React, { Component } from 'react';
import '../../css/dialog/message-input.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import FormInput from '../../components/dialog/form-input'

class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    handleSubmit = (text) => {
        if(text === "") return;
        this.props.onSendMessage({text: text, side: "right", attachs: []}, this.props.id);
    }

    processFiles = (attachs) => {
        if(attachs.length === 0) return;
        this.props.onSendMessage({text: "", side: "right", attachs: attachs}, this.props.id);
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

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (message, id) =>
            dispatch(actionCreators.sendMessage(message, id))
    }
};

export default connect(null, mapDispatchToProps)(MessageInput);
