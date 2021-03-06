import React, {Component} from 'react';
import "./message.css";

class Message extends Component {
    render() {
        return (
            <div className="container-fluid my-4">
                {/* If sender is current user, render message right-aligned */}
                {this.props.type === "sender" ?
                    <div className="row sender-message">
                        <div className="col text-right">
                            <span className="text-primary"><strong>{this.props.name}</strong></span>
                            <span className="text-black-50"> at {this.props.time}</span>
                            <p className="text-muted">{this.props.message}</p>
                        </div>
                        <div className="col profile-row-right">
                            {/*<img className="profile-picture"*/}
                            {/*     src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1524518669406-2D0YA93DDYGDKYHXOZUU/ke17ZwdGBToddI8pDm48kKFYOtK8W4VIIm-D7unIF7lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwC26LRMJwK8bCYeHqiJdGGAY7jUqG9Ai63KPiOW2tVcFehCc4d35tVad10Z5dYSro/Screen+Shot+2018-04-23+at+5.23.41+PM.png?format=2500w"/>*/}
                            <img className="profile-picture"
                                 src="https://cdn.discordapp.com/avatars/270368338461327360/3a29b54d357d065cf04e1a654c940248.png?size=256"/>
                        </div>

                    </div>
                    :
                    <div className="row receiver-message">
                        <div className="col profile-row-left">
                            <img className="profile-picture"
                                 src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1524518669406-2D0YA93DDYGDKYHXOZUU/ke17ZwdGBToddI8pDm48kKFYOtK8W4VIIm-D7unIF7lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwC26LRMJwK8bCYeHqiJdGGAY7jUqG9Ai63KPiOW2tVcFehCc4d35tVad10Z5dYSro/Screen+Shot+2018-04-23+at+5.23.41+PM.png?format=2500w"/>
                        </div>
                        <div className="col">
                            <span><strong>{this.props.name}</strong></span>
                            <span className="text-black-50"> at {this.props.time}</span>
                            <p className="text-muted">{this.props.message}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Message;