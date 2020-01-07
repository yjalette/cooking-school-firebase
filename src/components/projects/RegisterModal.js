import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} variant="primary" className="logo-div m-1">register</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="text-gold">
                    {/* <Modal.Title>Registration</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="bg-purple text-white font-sm">Please contact us for more details</Modal.Body>
                <Modal.Footer>
                    <Link onClick={handleClose} to="/contact" className="nav-link">send a message</Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterModal
