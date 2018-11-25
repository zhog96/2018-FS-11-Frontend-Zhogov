import React, { Component } from 'react';

import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Aux from './hoc/Aux.js';

import ChatList from './containers/chatList/chatList';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router>
                  <Aux>
                     <ChatList/>
                  </Aux>
                </Router>
            </div>
        );
    }
}

export default App;
