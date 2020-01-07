import React, { useState } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Settings from './Settings';
import MyClasses from './MyClasses';
import { Row, Col } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';

const style = {
    backgroundColor: 'white',
    fontWeight: 'bold'
}

const Profile = ({ auth, classes }) => {
    const [fields, setField] = useState({ classes: true, settings: false });
    const handleClick = e => {
        setField({
            [e.target.name]: true
        })
    }
console.log(auth)
    return (
        <Row className="">
            <Col xl={12} md={12} className="flex bg-pink p-0 w-100">
                <button onClick={handleClick} name="classes" style={fields.classes === true ? style : null}>my classes</button>
                <button onClick={handleClick} name="settings" style={fields.settings === true ? style : null}>settings</button>
            </Col>
            <Col xl={12} md={12} className="p-0 bg-beige">
                {fields.classes === true && <MyClasses projects={classes}/>}
                {fields.settings === true && <Settings email={auth.email} password={auth.password} userId={auth.uid} />}
            </Col> 
        </Row>
    )
}

const mapPropsToState = state => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default compose(connect(mapPropsToState),
    firestoreConnect([
        'classes'
    ])
)(Profile);