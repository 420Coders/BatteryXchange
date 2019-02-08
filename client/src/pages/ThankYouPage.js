import React, {Component} from 'react';

import "./ThankYouPage.css";

class ThankYouPage extends Component {


    render() {

        return (
            <div>
                <h1>Thank You For Using Our Product!</h1>
                <br></br>
                <h3>After 30 minutes are up, please return the battery to it's original location</h3>
                <br></br>
                <h3>We would love to hear your feedback on the survey below!</h3>
                <button>
                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeuVCbNoJwanHHKaJC-TN7YzR4s905ZLovhQjgGmJBY3EvNlQ/viewform?usp=sf_link">Survey!</a>
                </button>
            </div>
        )
    }
}

export default ThankYouPage;