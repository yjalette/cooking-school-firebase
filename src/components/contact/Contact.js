import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => (
    <div className="vh-100 d-flex align-items-center flex-column">
        <h1 className="my-5">Get In Touch</h1>
        <section className="width-25 p-3 shadow-sm" style={{ backgroundColor: '#f6d7b9a1' }}>
            <ContactForm />
        </section>
    </div>
)


export default Contact
