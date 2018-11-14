import React, { Component } from 'react';
import MessageList from './message-list.js';
import MessageInput from './message-input.js';
import Aux from '../../hoc/Aux.js';

class Dialog extends Component {  

    constructor(props) {
        super(props);
        this.messageList = React.createRef();
    }

    handleSubmit = (content) => {
        this.messageList.current.addMessage(content);
    }

    render() {
        return (
            <Aux>
                <MessageList id={this.props.id} ref={this.messageList}/>
                <MessageInput handleSubmit={this.handleSubmit}/>
            </Aux>
        );
    }
}

export default Dialog;
