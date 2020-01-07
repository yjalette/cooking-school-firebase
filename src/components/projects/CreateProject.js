import React from 'react';

import CreateProjectForm from './CreateProjectForm';
import { Row, Col } from 'react-bootstrap';

const CreateProject = () => {  
        return (
            <div className="vh-100">
                <h1 className="mt-5 text-center">Create A New Class</h1>
                <Row className="flex">
                    <Col xl={6} lg={8} md={10} sm={12}>
                        <CreateProjectForm />
                    </Col>
                </Row>
            </div>
        )
}


export default CreateProject;
