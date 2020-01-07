import React from 'react';

import CreatePostForm from './CreatePostForm';
import { Row, Col } from 'react-bootstrap';

const CreatePost = () => {  
        return (
            <div className="vh-100">
                <Row>
                    <Col xl={12} lg={12}>
                        <CreatePostForm />
                    </Col>
                </Row>
            </div>
        )
}


export default CreatePost;
