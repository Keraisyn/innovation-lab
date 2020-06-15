// Component: About
// - Main marketing page
// - Includes form which connects to volunteer

import React, {Component} from 'react';
import Navbar from "../navbar";
import axios from "axios";
import {withRouter} from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        this.props.handleLogin();
        this.props.history.push('/app');
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
        // const data = {
        //     username:this.props.uid,
        //     email:null,
        //     type:"user",
        // };
        // console.log(data);
        // axios.post("https://mental-health-server--rshetty.repl.co/registerUser", data).then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // });

    }

    render() {
        return (
            <div>
                <Navbar logout={this.props.logout}/>

                <form className="form-signin text-center" onSubmit={this.handleSubmit}>
                    <h1 className="h2 font-weight-normal mb-4">Please Log In</h1>
                    <input type="username" id="inputUsername" placeholder="Username" className="form-control mb-2"/>
                    <input type="password" id="inputPassword" placeholder="Password" className="form-control mb-4"/>
                    <button className="btn btn-lg btn-primary btn-block">Log In</button>
                    <p className="mt-5 mb-3 text-muted">© 2020</p>
                </form>
            </div>
        );
    }
}

export default withRouter(About);
