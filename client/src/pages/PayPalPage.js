import React, {Component} from 'react';
import PaypalBtn from './PayPalBtn';
import Xlogo from './Xlogo2.png';
import "./PayPalPage.css";


class PaymentPage extends Component{

    constructor() {
        super();
        this.state = {show: false};
    }

    state = {
        amount: "" ,
    }

    handleAmountInput = (event) => {
        this.setState({ amount: event.target.value })
    }
    
    handleClick() {
        this.setState({
            show: !this.state.show
        })
    }
    
    render(){
        return(
            <div className= "Pages">
            <div className= "Xlogo-div">
                <img className= "Xlogo" src={Xlogo} alt=""/>
            </div>
                <div className="TimeBtn">
                <div class="alert alert" role="alert">
                <h3 class="alert-heading">$0.00  | 30 mins</h3>
                <hr/>
                <h5 class="alert-heading">Please click on the pay pal button below to checkout!</h5>
                <hr/>
                <p></p>
                </div>
                {/*
                <button type="button" onClick={ () => this.handleClick()} value="1" className="btn btn-success btn-lg btn-block" data-toggle= "button">30 Mins ---> $1.00</button>
                <br></br>
                <button type="button" onClick={this.handleAmountInput} value="2" class="btn btn-success btn-lg btn-block" >1 Hour</button>
                <br></br>
                <button type="button" onClick={this.handleAmountInput} value="3" class="btn btn-success btn-lg btn-block">1.5 Hour</button>
                <br></br>
                <button type="button" onClick={this.handleAmountInput} value="4" class="btn btn-success btn-lg btn-block">2 Hours</button>
                */}
                <div class="container">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
                </div>
                <br></br>
                    <div id="paybut">
                        <PaypalBtn/>
                    </div>
            </div>
            </div>
        )
    }
}
export default PaymentPage