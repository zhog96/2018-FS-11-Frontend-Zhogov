import React, { Component } from 'react';
import '../../css/dialog/form-input.css'

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.handleSubmit(this.state.value);
        this.setState({value: ""});
        event.preventDefault();
    }

    render() {
        return (
            <form className="FormInput" onSubmit={this.handleSubmit}>
		        <input className="FormInput-input" type="text" value={this.state.value} onChange={this.handleChange} />
            </form>
        );
    }
}

export default FormInput;
