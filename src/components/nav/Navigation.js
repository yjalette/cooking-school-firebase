import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/hat-logo.png'
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';
import SignInLinks from './SignInLinks';

const Navigation = (props) => {
    console.log(props)
    const { auth, profile } = props;
    const links = auth.uid ? <SignInLinks profile={profile} auth={auth} title={profile.initials === undefined ? 'menu' : profile.initials} /> : <SignOutLinks />;
    return (
    <Navbar collapseOnSelect expand="lg" className="bg-purple justify-content-between">
        {/* <Navbar.Brand href="./" className="text-light">Vasiliki Vourliotaki</Navbar.Brand> */}
        <Navbar.Brand href="./" className="text-light logo-div">
            <img src={logo} alt="logo" className="w-100"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
            <Nav className="text-light">
                { links }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navigation);