import React, {Component} from 'react';
import "./chatheader.css";

class ChatHeader extends Component {
    render() {
        return (
            <div>
                <div className="row align-items-center py-4 px-5">
                    <div className="col-6">
                        <img className="profile-picture"
                             src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1524518669406-2D0YA93DDYGDKYHXOZUU/ke17ZwdGBToddI8pDm48kKFYOtK8W4VIIm-D7unIF7lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwC26LRMJwK8bCYeHqiJdGGAY7jUqG9Ai63KPiOW2tVcFehCc4d35tVad10Z5dYSro/Screen+Shot+2018-04-23+at+5.23.41+PM.png?format=2500w"/>
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
        );
    }
}

export default ChatHeader;