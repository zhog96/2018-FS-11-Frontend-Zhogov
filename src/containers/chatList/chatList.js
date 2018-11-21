import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import '../../css/dialog/message-list.css';

import Dialog from '../../components/dialog/dialog';

class ChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {chats: this.createChats(15)}
    }

    createChats(amount) {
        return new Array(amount).fill(null);
    }

    chatLinks = () => {
        return this.state.chats.map(((value, index) =>
                    <Link to={`/chats/${index}`} key={index}>
                        <div className="FormChat">
                            {index}
                        </div>
                    </Link>)
                );
    }

    render() {
        return (
            <div className="ChatList">
                <Route exact path={`/chats/`} component={this.chatLinks}/>
                {this.state.chats.map(((value, index) =>
                    <Route
                        key={index}
                        path={`/chats/${index}`}
                        component={() => <Dialog id={index} />}
                    />)
                )}
            </div>
        );
    }
}

export default ChatList;
