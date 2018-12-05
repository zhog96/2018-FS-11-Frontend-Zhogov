import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/dialog/message-list.css';

import FormMessage from '../../components/dialog/form-message'

class MessageList extends Component {

    render() {
        return (
            <div className="MessageList">
                {this.props.chats[this.props.id].chat.map(
                    (message, index) => 
                        <FormMessage content={message} key={index}/>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chats: [...state.msg.chats]
    };
};

export default connect(mapStateToProps)(MessageList);
