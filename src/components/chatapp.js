import React, {Component} from 'react';
import ChatBar from "./chatbar";
import ChatWindow from "./chatwindow";
import "./chatapp.css";

class ChatApp extends Component {
     render() {
         return (
             <div className="chat-container container-fluid vh-100">
                 <div className="row h-100 m-0">
                     <div className="col chatbar p-0">
                         <ChatBar/>
                     </div>
                     <div className="col p-0">
                         <ChatWindow/>
                     </div>
                 </div>
             </div>
         )
     }
}

export default ChatApp