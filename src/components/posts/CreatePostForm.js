import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { createPost } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreatePostForm extends Component {
    state = {
        title: '',
        description: '',
        recipe: '',
        duration: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
       e.preventDefault();
       console.log(this.state)
       this.props.createPost(this.state);
    }
    render() {
        
       
        return (
            <Form className="border m-xl-5 p-xl-5 m-0 p-2" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="title" name="title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="description" name="description" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Duration</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="duration" name="duration" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Recipe</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="recipe" name="recipe" />
                </Form.Group>
                <Form.Group>
                    <button variant="primary" type="submit">Submit</button>
                </Form.Group>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post))
    } 
}

export default connect(null, mapDispatchToProps)(CreatePostForm);

