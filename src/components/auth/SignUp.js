import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstNameError: '',
        lastNameError: '',
        confirmPasswordError: '',
        passwordError: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {
        let firstNameError = '';
        let lastNameError = '';
        let confirmPasswordError = '';
        let passwordError = '';

        const {firstName, lastName, password, confirmPassword} = this.state;

        const checkPassword = /^[a-z]\w{4,14}$/;
    
        if (!firstName){
            firstNameError = 'please enter your first name'
        }
        if (!lastName){
            lastNameError = 'please enter your last name'
        }
        if (password !== confirmPassword){
            confirmPasswordError = 'password does not match'
        }
        if (!password.match(checkPassword)){
            passwordError = "password between 4 to 14 characters which contain only characters, numeric digits, underscore and first character must be a letter"
        }
        if (firstNameError || lastNameError || confirmPasswordError || passwordError){
            this.setState({
                ...this.state,
                firstNameError,
                lastNameError,
                confirmPasswordError,
                passwordError
            })
            return false
        }
        return true
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state)
        // let validation = this.validate();
        // if (validation){
        //     
        // }
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="./" />
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Martin" name="firstName" onChange={this.handleChange} />
                    <span>{this.state.firstNameError}</span>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Lizzar" name="lastName" onChange={this.handleChange} />
                    <span>{this.state.lastNameError}</span>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="mlizzar@martin.com" name="email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" name="password" onChange={this.handleChange} />
                    <span>{this.state.passwordError}</span>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="confirm password" name="confirmPassword" onChange={this.handleChange} />
                    <span>{this.state.confirmPasswordError}</span>
                </Form.Group>
                <button type="submit">Submit</button>
                <div className="text-mute">
              { authError ? <p>{authError}</p> : null }
            </div>
            </Form>

        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

