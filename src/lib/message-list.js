import React, { Component } from 'react';
import FormMessage from './form-message.js';
import '../css/message-list.css';

class MessageList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {messages : 
            [
                {text : "Hello", side : "left", attachs : []}
            ]
        };
    }

    addMessage(content) {
        const states = this.state.messages;
        this.setState({
            messages : states.concat(content)
        });
        console.log(this.state);
    }

    render() {
        const messages = this.state.messages.map(
            (message, index) => <FormMessage content={message} key={index}/>
        );

        return (
            <div className="MessageList">
                {messages}
            </div>
        );
    }
}

export default MessageList;
