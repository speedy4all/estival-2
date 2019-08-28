import React, { Component } from 'react';
import{Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


class LogInForm extends Component{
    constructor(props) {
        super(props)
        this.changeValue = this.changeValue.bind(this)

        this.state = {
            Email: "", 
            Password: "" 
        }
    }
    
    changeValue(e){
        this.setState({
            [e.target.email]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.props.saveNewEvent(this.state)}}>
                    <label htmlFor="">Email:</label>
                    <input type="text" name="email" onChange={this.changeValue}/>
                    
                    <label htmlFor="">Password:</label>
                    <input type="text" name="password" onChange={this.changeValue}/>
                    
                    <button type="login">LogIn</button>
            
                </form>
            </div>
        )
    }
}

export default LogInForm

