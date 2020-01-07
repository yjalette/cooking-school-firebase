import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class ImageField extends Component {
    render() {
        return (
            <>
                <Form.Control onChange={this.props.imageUpload} type="file" name="url" placeholder="image"/>
            </>
        )
    }
}

export default ImageField
