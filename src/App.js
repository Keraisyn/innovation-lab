import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Navbar from "./components/navbar";

function App() {
    const loggedIn = false;

    return (
        <div className="App">
            <Navbar/>
            {loggedIn ? "" : <Login/>}
        </div>
    );
}

export default App;
