import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-light bg-light">
                <a className="navbar-brand" href="#" onClick={this.props.logOut}>Innovation Lab Project</a>
                <span className="navbar-text">built with &lt;3 by Matthews, Rohan, Aryan, Sean</span>
            </nav>
        )
    }
}

export default Navbar;
