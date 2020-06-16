import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-dark" style={{background: "#FA787A"}}>
                <a className="navbar-brand" href="#"
                   onClick={this.props.logout}
                >Innovation Lab Project</a>
                <span className="navbar-text text-white">built with &lt;3 by Matthews, Rohan, Aryan, Sean</span>
            </nav>
        )
    }
}

export default Navbar;
