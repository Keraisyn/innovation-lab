import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
        return (
            <div className="h-100">
                <div className="p-4">
                    <h4>You are now connected with Matthews Ma</h4>
                    <br/>
                    <br/>
                    <h5>Mental Health Resources</h5>
                    <ul>
                        <li><a href="https://www.mentalhealth.gov/">MentalHealth.gov</a></li>
                        <li><a href="https://www.nimh.nih.gov/index.shtml">National Institute for Mental Health</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ChatBar;