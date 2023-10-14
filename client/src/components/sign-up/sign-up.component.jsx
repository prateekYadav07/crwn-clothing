import React, { useState } from "react";
import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('Password provided does not match')
            return
        }

        signUpStart({ displayName, email, password })
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    name="displayName"
                    type="text"
                    value={displayName}
                    required
                    handleChange={handleChange}
                ></FormInput>

                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    required
                    handleChange={handleChange}
                ></FormInput>

                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    required
                    handleChange={handleChange}
                ></FormInput>

                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    required
                    handleChange={handleChange}
                ></FormInput>
                <CustomButton type="submit"  >SIGN UP</CustomButton>
            </form>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (user) => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp)
