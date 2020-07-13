import React, {ChangeEvent, Component} from 'react';
import {TLogin} from "@types";

import './login.styles.scss'

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
                    <input onChange={this.handleChange} name="email" id='email' type="email" value={this.state.email} required/>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} name="password" id='password' type="password" value={this.state.password} required/>
                    <label htmlFor="password">Password</label>
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}

export default Login;
