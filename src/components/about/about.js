// Component: About
// - Main marketing page
// - Includes form which connects to volunteer

import React, {Component} from 'react';
import Navbar from "../navbar";
import axios from "axios";
import './about.css';
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
            <div className="w-100">
                <Navbar logout={this.props.logout}/>

                <div className="hero container-fluid d-flex pt-5">
                    <div className="my-auto container text-white">
                        <h1 className="display-2">Innovation lab</h1>
                        <h1 className="lead mb-5">Talk to someone now, free and anonymously</h1>
                        <form className="form-signin w-25" onSubmit={this.handleSubmit}>
                            {/*<h1 className="h2 font-weight-normal mb-4">Want to talk? Click connect</h1>*/}
                            {/*<input type="username" id="inputUsername" placeholder="Username" className="form-control mb-2"/>*/}
                            {/*<input type="password" id="inputPassword" placeholder="Password" className="form-control mb-4"/>*/}
                            <button className="btn btn-lg btn-success btn-block">Match now!</button>
                            {/*<p className="mt-5 mb-3 text-muted">© 2020</p>*/}
                        </form>
                    </div>
                    {/*<div className="container text-center align-items-start mb-5 pt-5">*/}
                    {/*    <section className="title">*/}
                    {/*        <h1 className="display-2">Innovation Lab</h1>*/}
                    {/*        <h1 className="lead text-muted">Talk to someone now, free and anonymously</h1>*/}
                    {/*    </section>*/}
                    {/*</div>*/}
                </div>
                <div className="container my-4">
                    <section className="how-it-works py-5">
                        <h1 className="h1 mb-5 text-center">Our Process</h1>
                        <div className="row">
                            <div className="col">
                                <h3>Click connect above</h3>
                                <p>That's how easy it is! No need to enter any information. Just click connect.</p>
                            </div>
                            <div className="col">
                                <h3>Get matched</h3>
                                <p>Our system will match you up with an experienced volunteer who will speak to you at no cost.</p>
                            </div>
                            <div className="col">
                                <h3>Talk!</h3>
                                <p>Start feeling better. No cost at all and licensed therapists available if needed.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container-fluid footer pt-5 text-white-50">
                    <section className="footer text-center my-auto">
                        <h5 className="mb-3">A demo for the Highlander Innovation Lab</h5>
                        <h6>Created by Matthews, Rohan, Aryan, and Sean</h6>
                    </section>
                </div>

                {/*<form className="form-signin text-center" onSubmit={this.handleSubmit}>*/}
                {/*    <h1 className="h2 font-weight-normal mb-4">Want to talk? Click connect</h1>*/}
                {/*    /!*<input type="username" id="inputUsername" placeholder="Username" className="form-control mb-2"/>*!/*/}
                {/*    /!*<input type="password" id="inputPassword" placeholder="Password" className="form-control mb-4"/>*!/*/}
                {/*    <button className="btn btn-lg btn-primary btn-block">Connect</button>*/}
                {/*    /!*<p className="mt-5 mb-3 text-muted">© 2020</p>*!/*/}
                {/*</form>*/}
            </div>
        );
    }
}

export default withRouter(About);
