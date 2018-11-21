import React, { Component } from 'react';
//import MessageList from './message-list.js';
//import MessageInput from './message-input.js';
import Aux from '../../hoc/Aux.js';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class MessageList extends Component {  
    render() {
        return (
            <Aux>
                <div>
                </div>
                <button>
                </button>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        send: true,
        payload: state.payload
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () =>
            dispatch(actionCreators.sendMessage())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
