import React, {Component} from 'react';
import Xlogo from './Xlogo2.png';

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
                <h1 class="alert-heading">Thank You For Using Our Product!</h1>
                <hr/>
                <h4 class="alert-heading">We would love to hear your feedback on the survey below!</h4>
                 <br/>
                 <button type="button" class="btn btn-success"> 
                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeuVCbNoJwanHHKaJC-TN7YzR4s905ZLovhQjgGmJBY3EvNlQ/viewform?usp=sf_link">Survey!</a>
                </button>
                <hr/>
            </div>
            <div class="alert alert-danger" role="alert">
                 <hr/>   
                 <h4 class="alert-heading">After 30 minutes are up, please return the battery to it's original location</h4>
                <hr/>
            </div>   
            </div>                     
            </div>
        )
    }
}

export default ThankYouPage;