import React, {Component} from 'react';
import Message from "./message";
import "./chatwindow.css";
import MessageEnter from "./messageenter";
import ChatHeader from "./chatheader";

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
            message: "Hello world!",
            type: "other",
        },
        {
            name: "Test",
            time: "8:53",
            message: "Hi!",
            type: "sender",
        },
    ];


    render() {
        return (
            <div className="h-100 chat-window">
                {/* Header with username and picture */}
                <ChatHeader/>

                {/* Message window */}
                <div className="message-window border-bottom border-top py-4 px-5">
                    {this.testMessages.map(msg => (
                        <Message
                            name={msg.name}
                            time={msg.time}
                            message={msg.message}
                            type={msg.type}
                        />
                    ))}
                    <div className="mx-3 px-5">
                        <hr/>
                    </div>
                    <div className="px-4 my-4">
                        <h1 className="h5 text-muted">Today</h1>
                    </div>
                </div>
                {/* Message typing bar */}
                <MessageEnter />
            </div>
        );
    }
}

export default ChatWindow;