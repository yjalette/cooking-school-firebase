import React, { Component } from 'react';
import { Card, Jumbotron } from 'react-bootstrap';
import vasoEyesDown from '../../images/vaso-eyesDown.jpg';
import vasoBar from '../../images/vaso-bar.jpg';

class OnlineLessons extends Component {
    render() {
        return (
            <div className="p-2 position-relative w-100 shadow py-5 flex flex-column bg-light">
                <h1>Interested in instructor-led online courses?</h1>
                <Card className="flex flex-column border-0 signUp-wrapper">
                    <Card.Body className="d-flex flex-lg-row flex-column signUpImages ">
                        <Card.Img variant="top" src={vasoEyesDown} className="w-100 p-3 shadow p-3 m-2 bg-purple" />
                        <Card.Img variant="top" src={vasoBar} className="w-100 p-3 shadow p-3 m-2 bg-purple" />
                    </Card.Body>
                </Card>
                <Jumbotron className="flex flex-column bg-light">
                    <h1>Available from anywhere, on any device, at any time</h1>
                    <p className="w-50 text-center">I train home cooks, culinary students, professional cooks and everyone in between. Whether you want to gain confidence in your kitchen, transition to a healthier diet and lifestyle or are a professional wanting to expand your skill set, I have something for you. </p>
                    <button>Register Now!</button>
                </Jumbotron>
            </div>
        )
    }
}

export default OnlineLessons;
