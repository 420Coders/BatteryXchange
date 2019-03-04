import React, {Component} from 'react';
import Xlogo from './Xlogo2.png';
import Timer from 'react-compound-timer'

import "./ThankYouPage.css";

class ThankYouPage extends Component {


    render() {

        return (
            <div className="thanksDiv">

            <div className="thanksCont">
            <div className= "Xlogo-div-thanks">
                <img className= "Xlogo" src={Xlogo} alt="" width="115px" height="75px" />
                <p>BATTERYXCHANGE</p>
            </div>
            <div class="alert alert" role="alert">
                <hr/>
                <hr/>
                <p class="alert-heading">Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you. Log into your PayPal account to view transaction details.</p>
                <hr/>   
                <hr/>
                <h5 class="alert-heading">We would love to hear your feedback on the survey below!</h5>
                 <button type="button" class="btn btn-success"> 
                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeuVCbNoJwanHHKaJC-TN7YzR4s905ZLovhQjgGmJBY3EvNlQ/viewform?usp=sf_link">Survey!</a>
                </button>
            </div>
            <div class="alert alert-danger" role="alert">
                 <hr/>   
            <Timer
                initialTime={60000*30}
                direction="backward"
                startImmediately={true}
            >
            {() => (
            <React.Fragment>
            <Timer.Minutes /> minutes &nbsp;
            <Timer.Seconds /> seconds 
            </React.Fragment>
            )}
            </Timer>
                 <h5 class="alert-heading">After timer runs out, please return the battery to it's original location</h5>
                <hr/>
            </div>   
            </div>                     
            </div>
        )
    }
}

export default ThankYouPage;