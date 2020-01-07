import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import ImageField from './ImageField';
import { Redirect } from 'react-router-dom';
import { storage } from '../../config/fbConfig';
import { withRouter } from "react-router-dom";

class CreateProjectForm extends Component {
    state = {
        title: '',
        description: '',
        duration: '',
        price: '',
        url: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = e => {
        console.log(e.target)
        if (e.target.files[0]) {
            const image = (e.target.files[0])
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                snapshot => {
                    console.log(snapshot)
                },
                errors => {
                    console.log(errors)
                },
                ()=> {
                    storage.ref('images').child(image.name).getDownloadURL().then(url=> {
                        this.setState({
                            url
                        })
                    })
                }
            )
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/classes');
    }
    render() {
        const { auth } = this.props;
        if (auth.email !== 'admin@admin.com') return <Redirect to="./registration" />
        return (
            <Form className="m-xl-5 p-5 mt-5" onSubmit={this.handleSubmit} style={{ backgroundColor: '#f6d7b9a1' }}>
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
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="price" name="price" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Upload Image</Form.Label>
                    <ImageField imageUpload={this.handleImageChange} />
                </Form.Group>
                <Form.Group className="w-100 flex">
                    <img src={`${this.state.url}` || null} alt=""  className="w-25"/>
                </Form.Group>
                <Form.Group className="h-100">
                    <button variant="primary">Submit</button>
                </Form.Group>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm));
