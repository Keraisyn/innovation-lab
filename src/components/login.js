import React from 'react';
import './login.css';

function Login() {
    return (
        <form className="form-signin text-center">
            <h1 className="h2 font-weight-normal mb-4">Please Log In</h1>
            <input type="username" id="inputUsername" placeholder="Username" className="form-control" />
            <input type="password" id="inputPassword" placeholder="Password" className="form-control mb-4" />
            <button className="btn btn-lg btn-primary btn-block">Log In</button>
            <p className="mt-5 mb-3 text-muted">© 2020</p>
        </form>
    )
}

export default Login;
