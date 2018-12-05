import React, { Component } from 'react';
import '../../css/dialog/form-message.css'

class FormMessage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {time: new Date()};
    }

    render() {
        const imagesList = [...this.props.content.attachs];
        const images = imagesList.map(
            (file, index) => {
                if(file.type.search("image/*") > -1) {
                    return <img className={"FormMessage-p " + this.props.content.side} key={index}       
                            src={URL.createObjectURL(file)} alt=""></img>;
                }
                return (
                    <a
                        className={"FormMessage-p " + this.props.content.side}
                        key={index}
                        href={URL.createObjectURL(file)}>{URL.createObjectURL(file)}
                    </a>
                
                );
            }
        );

        return (
            <div className={"FormMessage " + this.props.content.side}>
                <p className={"FormMessage-p " + this.props.content.side}>
                    {this.props.content.text}
                </p>
                <div className={"FormMessage-p " + this.props.content.side}>
                    {images}
                </div>
                <div className="FormMessage-time">{this.state.time.getHours().toString() + ':' + this.state.time.getMinutes().toString()}</div>
                <div className="FormMessage-download"></div>
            </div>
        );
    }
}

export default FormMessage;
