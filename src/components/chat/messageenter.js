import React, {Component} from 'react';
import axios from 'axios';
import "./messageenter.css";

class MessageEnter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageValue: "",
        }
    }

    // Send message to server when user presses enter
    sendMessage = (e) => {
        if (e.key === 'Enter') {

            console.log("Message processing");
            const sender=this.props.uid;

            // POST message to server
            axios.post("https://mental-health-server--rshetty.repl.co/newChatMessage", {
                receiver: "7hvZpGNAb2Ox6GwGHApxdsuch5P2",
                sender: 'matthews',
                message: e.target.value,
            }).then(res => {
                console.log(res);
                console.log(res.data);
            });

            // Clear text value
            e.target.value = "";
        }
    }

    render() {
        return (
            <div className="message-bar py-4 px-5">
                <div className="form-row align-items-center">
                    <div className="col">
                        <div className="input-group">
                        <textarea className="message-input form-control bg-transparent border-0" placeholder="Type your message..."
                                  rows={1} data-autosize={true} onKeyUp={this.sendMessage}>
                        </textarea>
                            <div className="input-group-append">
                                <button className="btn btn-ico btn-secondary btn-minimal bg-transparent border-0 append-icon"
                                        type="button" data-emoji-btn="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-smile injected-svg">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                    </svg>
                                </button>
                            </div>
                            <div className="input-group-append">
                                <button id="chat-upload-btn-1"
                                        className="btn btn-ico btn-secondary btn-minimal bg-transparent border-0 dropzone-button-js dz-clickable append-icon"
                                        type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-paperclip injected-svg">
                                        <path
                                            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-ico btn-primary rounded-circle" type="submit">
                            <span className="fe-send"></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageEnter;