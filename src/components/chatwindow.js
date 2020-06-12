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
                <ChatHeader/>
                <div className="message-window border-bottom">
                    {this.testMessages.map(msg => (
                        <Message
                            name={msg.name}
                            time={msg.time}
                            message={msg.message}
                            type={msg.type}
                        />
                    ))}
                </div>
                <MessageEnter />
            </div>
        );
    }
}

export default ChatWindow;