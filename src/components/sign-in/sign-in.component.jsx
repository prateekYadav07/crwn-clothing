import React, { useState } from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        'email': '',
        'password': ''
    })
    const { email, password } = userCredentials

    const handleSubmit = async event => {
        emailSignInStart(email, password)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>
            <div>
                <FormInput label="Email" name="email" type="email" handleChange={handleChange} value={email} required />
                <FormInput label="Password" name="password" type="password" handleChange={handleChange} value={password} required />
                <div className="buttons">
                    <CustomButton type="button" onClick={handleSubmit}>Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn={true}>Sign In with Google</CustomButton>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)