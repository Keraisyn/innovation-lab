import React from 'react';

import * as firebase from "firebase";
import "firebase/auth";
import * as firebaseui from "firebaseui";

import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Navbar from "./components/navbar";
import ChatApp from "./components/chatapp";

function App() {
    // Your web app's Firebase configuration
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
    firebase.initializeApp(firebaseConfig);

    // // Firebase UI
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start('#firebaseui-auth-container', {
    //     callbacks: {
    //         signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //             // User successfully signed in.
    //             // Return type determines whether we continue the redirect automatically
    //             // or whether we leave that to developer to handle.
    //             return true;
    //         },
    //         uiShown: function() {
    //             // The widget is rendered.
    //             // Hide the loader.
    //             document.getElementById('loader').style.display = 'none';
    //         }
    //     },
    //     // Terms of service url.
    //     tosUrl: '<your-tos-url>',
    //     // Privacy policy url.
    //     privacyPolicyUrl: '<your-privacy-policy-url>'
    // });

    function anonymousAuth() {
        firebase.auth().signInAnonymously().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            console.log(uid);
            // ...
        } else {
            // User is signed out.
            // ...
        }
        // ...
    });

    const loggedIn = true;
    const showChat = false;

    return (
        <div className="App">
            <button className="btn btn-primary mt-5 pt-5" onClick={anonymousAuth}>hiof</button>
            <Navbar/>
            {loggedIn ? "" : <Login/>}
            {showChat ? <ChatApp/> : ""}
        </div>
    );
}

export default App;
