import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { createMessage } from '../../store/actions/contactActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        isSend: false,
        errors: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {
        if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
            this.setState({
                errors: 'All fields must be filled out'
            })
            return false
        } else {
            return true
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.validate()) {
            this.props.createMessage(this.state);
            this.setState({
                isSend: true
            })
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label className="text-center w-100">{this.state.isSend ? 'Your message was successfully sent' : null}</Form.Label>
                    <Form.Label className="text-center w-100">{this.state.errors}</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Sally Gattty" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows="3" onChange={this.handleChange} />
                </Form.Group>
                <button type="submit" className="text-white">send</button>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createMessage: message => dispatch(createMessage(message))
    }
}

export default connect(null, mapDispatchToProps)(ContactForm);