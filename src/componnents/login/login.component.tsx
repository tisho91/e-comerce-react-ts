import React, {ChangeEvent, Component} from 'react';
import {TLogin} from "@types";

import './login.styles.scss'
import FormInput from "../form-input/form-input.component";

class Login extends Component<any,any> {
    constructor(props:TLogin) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }
    handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an acocount</h2>
                <span>Login with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='email' name="email" id='email' type="email" value={this.state.email} required/>
                    <FormInput handleChange={this.handleChange} label='password++66' name="password" id='password' type="password" value={this.state.password} required/>
                </form>
            </div>
        );
    }
}

export default Login;
