import React, { Component } from 'react';

import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

import MessageList from './containers/dialog/messageList';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <MessageList />
                </Router>
            </div>
        );
    }
}

export default App;
