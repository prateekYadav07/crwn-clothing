import React, { Component } from "react";
import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Password provided does not match')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, displayName)
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Display Name"
                        name="displayName"
                        type="text"
                        value={displayName}
                        required
                        handleChange={this.handleChange}
                    ></FormInput>

                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        required
                        handleChange={this.handleChange}
                    ></FormInput>

                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        required
                        handleChange={this.handleChange}
                    ></FormInput>

                    <FormInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        required
                        handleChange={this.handleChange}
                    ></FormInput>
                    <CustomButton type="submit"  >SIGN UP</CustomButton>
                </form>

            </div>
        )
    }

}

export default SignUp
