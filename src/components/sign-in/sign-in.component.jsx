import React, { Component } from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" name="email" type="email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput label="Password" name="password" type="password" handleChange={this.handleChange} value={this.state.password} required />
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn