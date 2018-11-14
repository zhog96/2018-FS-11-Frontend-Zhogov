import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import ChatList from './lib/chats/chat-list.js';

class App extends Component {
    

    render() {
        return (
            <Router>
                <ChatList />
            </Router>
        );
    }
}

export default App;
