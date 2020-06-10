import React, {Component} from 'react';
import "./message.css";

class Message extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col profile-row bg-info">

                </div>
                <div className="col">
                    <span>{this.props.name}</span>
                    <span> at {this.props.time}</span>
                    <p>{this.props.message}</p>
                </div>
            </div>
        );
    }
}

export default Message;