import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const EditMode = ({ project, diasableEditMode, deleteProjectItem, updateProjectItem }) => {
    const [data, setData] = useState({title: project.title, description: project.description, duration: project.duration});

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSave = () => {
        console.log("editmode=>",data)
        updateProjectItem(data);
        // updateProjectItem({...data, title: data.title});
        diasableEditMode();
    }

    const handleDelete = () => {
        deleteProjectItem();
        diasableEditMode();
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control value={data.title} name="title" onChange={handleChange} type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" value={data.description} name="description" onChange={handleChange} type="text" className="md-textarea form-control" rows="7" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Duration</Form.Label>
                <Form.Control value={data.duration} onChange={handleChange} name="duration" type="text" />
            </Form.Group>
            <section className="d-flex align-items-end w-100">
                <button variant="primary" className="logo-div m-1" onClick={handleSave}>save</button>
                <button variant="primary" className="logo-div m-1" onClick={handleDelete}>delete</button>
            </section>
        </>
    )
}

export default EditMode;