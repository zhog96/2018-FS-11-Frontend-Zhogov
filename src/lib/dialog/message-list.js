import React, { Component } from 'react';
import FormMessage from './form-message.js';
import '../../css/dialog/message-list.css';
import { chats } from '../chats/chat-list.js';

class MessageList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {messages : 
            chats[this.props.id]
        };
    }

    addMessage(content) {
        const states = this.state.messages;
        this.setState({
            messages : states.concat(content)
        });
        chats[this.props.id] = chats[this.props.id].concat(content);
        console.log(chats);
    }

    render() {
        return (
            <div className="MessageList">
                {this.state.messages.map(
                    (message, index) => <FormMessage content={message} key={index}/>
                )}
            </div>
        );
    }
}

export default MessageList;
