// Component: ChatWindow
// - Window on right side where user can view + send messages

import React, {Component} from 'react';
import moment from 'moment';
import Message from "./message";
import "./chatwindow.css";
import MessageEnter from "./messageenter";
import ChatHeader from "./chatheader";
import axios from "axios";

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.messages ? this.props.messages : [],
        };
        this.getChatHistory();
        this.setupDatabase();
    }

    setupDatabase() {
        const db = this.props.firebase.firestore();
        db.collection("chats").doc(this.props.uid + "++matthews")
            .onSnapshot((doc) => {
                const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
                console.log(doc.data().messages);
                this.setState({
                    messages: doc.data().messages,
                });
            });
    }

    getChatHistory() {
        console.log("Getting chat history");
        axios.post("https://mental-health-server--rshetty.repl.co/getChatHistory", {
            user1: this.props.uid,
            user2: 'matthews',
        }).then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
                messages: res.data,
            });
        });
    }

    // Temp UI testing messages
    testMessages = [
        {
            name: "Matthews Ma",
            time: "8:50",
            message: "Hello world! iuh iou hi uhaio euh aoeiuh faoi ahoifuh usaui efiaughyugf ief ygeuky",
            type: "other",
        },
        {
            name: "Test",
            time: "8:53",
            message: "Hi! waiyf akufya ekuy gkuay geakuygeaiuky kube fkawuf oi uhiluhv oiasefh aseiluf ahgelrfuhoiu ",
            type: "sender",
        },
        {
            name: "Matthews Ma",
            time: "8:50",
            message: "Hello world! ewaliouh eliuhd iuflj eilu nd oiu dilk eu ",
            type: "other",
        },
        {
            name: "Matthews Ma",
            time: "8:50",
            message: "Hello world! joeij afefoi f ojdoaifu n oiduh ifuh aishirbaiudshy kiasufb duyfb ufy ",
            type: "other",
        },
        {
            name: "You",
            time: "8:50",
            message: "dont kill urwself dont kill urwselfdont kill urwselfdont kill urwselfdont kill urwselfdont kill urwselfdont kill urwself",
            type: "sender",
        },
    ];


    render() {
        // if (this.state.messages === []) {
        //     this.setState({
        //         messages: this.props.messages,
        //     });
        // }
        return (

            <div className="h-100 chat-window">
                {/* Header with username and picture */}
                <ChatHeader/>

                {/* Message window */}
                <div className="message-window border-bottom border-top py-4 px-5">
                    {this.state.messages.map(msg => (
                        <Message
                            name={msg.sender}
                            time={moment(msg.timestamp.milliseconds).format("h:mm a")}
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
                <MessageEnter uid={this.props.uid}/>
            </div>
        );
    }
}

export default ChatWindow;