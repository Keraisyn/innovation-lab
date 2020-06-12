import React, {Component} from 'react';
import "./messageenter.css";

class MessageEnter extends Component {
    render() {
        return (
            <div className="message-bar py-4 px-5">
                <div className="form-row align-items-center">
                    <div className="col">
                        <div className="input-group">
                        <textarea className="message-input form-control bg-transparent border-0" placeholder="message"
                                  rows={1} data-autosize={true}>
                        </textarea>
                            <div className="input-group-append">
                                <button id="chat-upload-btn-1"
                                        className="btn btn-ico btn-secondary btn-minimal bg-transparent border-0 dropzone-button-js dz-clickable"
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