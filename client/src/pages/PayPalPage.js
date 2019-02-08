import React, {Component} from 'react';
import PaypalBtn from './PayPalBtn';
import Xlogo from './Xlogo.webp';
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
                <img className= "Xlogo" src={Xlogo} alt="logo" />
            </div>
            
            <div className="TimeBtn">
                <button type="button" onClick={ () => this.handleClick()} value="1" class="btn btn-success btn-lg btn-block" data-toggle= "button">30 Mins ---> $1.00</button>
                <br></br>
                {/*
                <button type="button" onClick={this.handleAmountInput} value="2" class="btn btn-success btn-lg btn-block" >1 Hour</button>
                <br></br>
                <button type="button" onClick={this.handleAmountInput} value="3" class="btn btn-success btn-lg btn-block">1.5 Hour</button>
                <br></br>
                <button type="button" onClick={this.handleAmountInput} value="4" class="btn btn-success btn-lg btn-block">2 Hours</button>
                */}
                <br></br>
                <br></br>
                    <div id="paybut">
                        <PaypalBtn />
                    </div>
            </div>
            </div>
        )
    }
}
export default PaymentPage