import React from 'react'
import ProjectCard from './ProjectCard';
import { Row, Col } from 'react-bootstrap';


const ProjectsList = ({ projects, auth }) => {
    return (
        <>
            <Row className="w-100 flex m-0">
                <Col xl={8} lg={12}>
                    {projects && projects.map(project => {
                        return <ProjectCard project={project} key={project.id} email={auth.email}/>
                    })}
                </Col>
            </Row>
        </>
    )
}

export default ProjectsList;

