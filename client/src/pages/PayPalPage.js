import React, {Component} from 'react';
import PaypalBtn from '../components/PayPalBtn';
import Xlogo from '../components/images/Xlogo.webp';
import "./PayPalPage.css";
import toggleDisplay from 'react-toggle-display';


class PaymentPage extends Component{
    state = {
        amount: "" ,
        showDiv:true
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
                <button type="button" onClick={this.handleAmountInput} value="1" class="btn btn-success btn-lg btn-block">30 Mins</button>
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
                <toggleDisplay show={this.state.show}>
                    <div id="paybut">
                        <PaypalBtn />
                    </div>
                </toggleDisplay>
            </div>
            </div>
        )
    }
}
export default PaymentPage