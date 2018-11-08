import React, { Component } from 'react';
import './App.css';
import MessageList from './lib/message-list.js';
import MessageInput from './lib/message-input.js';

class App extends Component {  

    constructor(props) {
        super(props);
        this.messageList = React.createRef();
    }

    handleSubmit = (content) => {
        this.messageList.current.addMessage(content);
    }

    render() {
        return (
            <div className="App">
                <MessageList ref={this.messageList}/>
                <MessageInput handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;
