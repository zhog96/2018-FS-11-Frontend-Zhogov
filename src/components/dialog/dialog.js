import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';

import MessageList from '../../containers/dialog/messageList';
import MessageInput from '../../containers/dialog/messageInput';

class Dialog extends Component {
    render() {
        return (
            <Aux>
               <MessageList id={this.props.id}/>
               <MessageInput id={this.props.id}/>
            </Aux>
        );
    }
}

export default Dialog;
