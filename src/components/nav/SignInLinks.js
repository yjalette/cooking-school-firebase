import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const SignInLinks = ({ signOut, auth, profile }) => {
    console.log(profile)
    return (
        <>
            {auth.email === 'admin@admin.com' ? <Link to="/create-class" className="nav-link">create a class</Link> : null}
            {/* <button className="nav-link rounded-circle bg-gold text-dark p-2" style={{ width: '50px', height: '50px' }}></button> */}
                <Link to="/classes" className="nav-link">classes</Link>
                <Link to="/user-profile" className="nav-link">my profile</Link>
                <Link to="/contact" className="nav-link">help</Link>
                <Dropdown.Divider />
                <Link onClick={signOut} to="" className="nav-link">sign out</Link>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(SignInLinks)
