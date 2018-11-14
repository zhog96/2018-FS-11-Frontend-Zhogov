import React, { Component } from 'react';
import '../../css/chats/chat-list.css';
import Dialog from '../dialog/dialog.js';
import { Route, Link } from "react-router-dom";

var chats;

class ChatList extends Component {

    constructor(props) {
        super(props);
        this.createChats(15);
    }

    createChats(amount) {
        chats = new Array(amount).fill(null).map((_, index) => {return [{text : `Hello ${index}`, side : "left", attachs : []}]});
    }

    chatLinks = () => {
        return chats.map(((value, index) =>
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
                {chats.map(((value, index) =>
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

export {chats};
export default ChatList;
