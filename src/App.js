import React, {Component} from 'react';
import axios from 'axios';

import * as firebase from "firebase";
import "firebase/auth";
import * as firebaseui from "firebaseui";

import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Navbar from "./components/navbar";
import ChatApp from "./components/chatapp";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            showChat: false,
        };

        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCrnkoSLbcPCfn0K2H7ym_rwCqU2ztSoWU",
            authDomain: "chat-app-86e50.firebaseapp.com",
            databaseURL: "https://chat-app-86e50.firebaseio.com",
            projectId: "chat-app-86e50",
            storageBucket: "chat-app-86e50.appspot.com",
            messagingSenderId: "807312093511",
            appId: "1:807312093511:web:213506117209fe7bea1c62",
            measurementId: "G-R7Z40830FQ"
        };

        console.log("Initializing Firebase app");
        firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                console.log("User ID:", uid);
                this.setState({
                    loggedIn: true,
                    showChat: true,
                });
                console.log("User signed in");
                // ...
            } else {
                // User is signed out.
                // ...
            }
            // ...
        });
    }

    anonymousAuth() {
        console.log("User authenticated");
        firebase.auth().signInAnonymously().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    logOut() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }, function(error) {
            // An error happened.
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.loggedIn ? "" : <button className="btn btn-primary mt-5 pt-5" onClick={this.anonymousAuth()}>Authenticate</button>}
                <Navbar logOut={this.logOut()}/>
                {/*{this.state.loggedIn ? "" : <Login/>}*/}
                {this.state.showChat ? <ChatApp/> : ""}
            </div>
        );
    }
}

export default App;
