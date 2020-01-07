import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import hat from '../../images/hat-white.png';
import { deleteProject, updateProject } from '../../store/actions/projectActions';
import EditMode from './EditMode';
import { connect } from 'react-redux';
import RegisterModal from './RegisterModal';

const hats = [hat, hat, hat, hat, hat]

const hatStyle = {
    width: '30px',
    height: '30px'
}

const ProjectCard = ({ project, email, deleteProject, updateProject }) => {
    const [editMode, setEditMode] = useState(false);

    const handleEditMode = () => {
        setEditMode(true)
    }

    const handleUpdateProject = (data) => {
        updateProject(project.id, data)
    }

    const handleDeleteProject = () => {
        deleteProject(project);
    }

    const diasableEditMode = () => {
        setEditMode(false)
    }

    return (
        <Row className="shadow-md p-2 my-5">
            <Col lg={6} md={12} className="d-flex flex-column justify-content-around rounded p-0" style={{ backgroundColor: '#f6d7b9a1' }} >
                {email !== 'admin@admin.com' ? <NotAdminBtn project={project} /> : editMode ? <EditMode project={project} updateProjectItem={handleUpdateProject} deleteProjectItem={handleDeleteProject} diasableEditMode={diasableEditMode} /> : <NotEditMode project={project} handleClick={handleEditMode} />}
            </Col>
            <Col lg={6} md={12} className="flex p-0" >
                <img src={project.url} alt="food-img" className="class-food-img shadow-sm" />
            </Col>
        </Row>
    )
}

const NotEditMode = ({ handleClick, project }) => (
    <>
        <section className="d-flex align-content-center bg-purple p-3">
            <h2 className="text-white">{project.title}</h2>
            {hats.map(hat => <img src={hat} alt='hat' key={Math.random() * 10} style={hatStyle} />)}
        </section>
        <section className="p-5">
            <p>{project.description}</p>
            <span className="font-sm text-black"><i className="fa fa-clock-o m-1"></i>{project.duration}</span>
            <section className="d-flex align-items-end flex-column w-100">
                <button onClick={handleClick} className="w-25">edit</button>
            </section>
        </section>
    </>
)

const NotAdminBtn = ({ project }) => (
    <>
        <section className="d-flex align-content-center bg-purple p-3">
            <h2 className="text-white">{project.title}</h2>
            {hats.map(hat => <img src={hat} alt='hat' key={Math.random() * 10} style={hatStyle} />)}
        </section>
        <section className="p-5">
            <p>{project.description}</p>
            <span className="font-sm text-black"><i className="fa fa-clock-o m-1"></i>{project.duration}</span>
            <section className="d-flex align-items-end flex-column w-100">
                <RegisterModal />
            </section>
        </section>
    </>
)

export default connect(null, {
    deleteProject, updateProject
})(ProjectCard);






