import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Aux from './hoc/Aux.js';
import {connect} from 'react-redux';

import ChatList from './components/chatList/chatList';
import Auth from './containers/auth/auth';

import * as actionCreators from './store/actions/index'

class App extends Component {
    componentDidMount() {
        this.props.checkToken();
    }

    render() {
        var route = (<Switch>
                <Route path='/login/' exact component={Auth} />
                <Redirect to='/login/'></Redirect>
            </Switch>);

        if(this.props.token) {
            route = (<Switch>
                <Route path='/chats/' component={ChatList} />
                <Route path='/login/' exact component={Auth} />
                <Redirect to='/chats/'></Redirect>
            </Switch>);
        }

        return (
            <Router>
                <Aux>
                    <main className={'App'}>
                        {route}
                    </main>
                </Aux>
            </Router>
        );
    }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
};

const mapDispatchToProps = (dispatch) => {
  return  {
    checkToken: () => dispatch(actionCreators.authCheckState())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
