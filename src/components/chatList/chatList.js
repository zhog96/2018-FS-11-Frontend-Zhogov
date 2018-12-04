import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import '../../css/dialog/message-list.css';

import Dialog from '../dialog/dialog';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index'
import { Redirect } from 'react-router-dom';

class ChatList extends Component {
    chatLinks = () => {
        return this.props.chats.map(((value, index) =>
                    <Link to={`/chats/${index}`} key={index}>
                        <div className="FormChat">
                            {this.props.chats[index].name}
                        </div>
                    </Link>)
                );
    }

    render() {
        if(this.props.chats.length === 0 && !this.props.error) {
            this.props.loadChats(this.props.token);
        }

        let redirect = null;

        if(this.props.error) {
            redirect = <Redirect to='/login/'></Redirect>;
        }

        return (
            <div className="ChatList">
                <Route exact path={`/chats/`} component={this.chatLinks}/>
                {this.props.chats.map(((value, index) =>
                    <Route
                        key={index}
                        path={`/chats/${index}`}
                        component={() => <Dialog id={index} />}
                    />)
                )}
                {redirect}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    chats: [...state.msg.chats],
    token: state.auth.token,
    loading: state.msg.loading,
    error: state.msg.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return  {
    loadChats: (token) => dispatch(actionCreators.loadChats(token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
