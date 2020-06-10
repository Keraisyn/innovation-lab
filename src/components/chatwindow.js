import React, {Component} from 'react';
import Message from "./message";

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
        }
    }

    testMessages = [
        {
            name: "Matthews Ma",
            time: "8:50",
            message: "Hello world!"
        },
        {
            name: "Test",
            time: "8:53",
            message: "Hi!"
        },
    ];


    render() {
        return (
            <div className="h-100">
                <div className="my-5 py-5">

                </div>
                {this.testMessages.map(msg => (
                    <Message
                        name={msg.name}
                        time={msg.time}
                        message={msg.message}
                    />
                ))}
            </div>
        );
    }
}

export default ChatWindow;