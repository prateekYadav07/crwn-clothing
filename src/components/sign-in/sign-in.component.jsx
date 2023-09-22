import React, { Component } from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {emailSignInStart} = this.props
        const { email, password } = this.state
        emailSignInStart(email,password)
        // try {
        //     await auth.signInWithEmailAndPassword(email, password)
        //     this.setState({ email: '', password: '' })
        // } catch (error) {
        //     console.log(error);
        // }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart} = this.props
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <div>
                    <FormInput label="Email" name="email" type="email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput label="Password" name="password" type="password" handleChange={this.handleChange} value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="submit" onClick={this.handleSubmit}>Sign In</CustomButton>
                        <CustomButton onClick={googleSignInStart} isGoogleSignIn={true}>Sign In with Google</CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)