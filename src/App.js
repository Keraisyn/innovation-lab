import React from 'react';
import "firebase/auth";

import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Navbar from "./components/navbar";
import ChatApp from "./components/chatapp";

function App() {
    const firebaseConfig = {

    };

    const loggedIn = true;
    const showChat = false;

    return (
        <div className="App">
            <Navbar/>
            {loggedIn ? "" : <Login/>}
            {showChat ? "" : <ChatApp/>}
        </div>
    );
}

export default App;
