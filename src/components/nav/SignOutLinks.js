import React from 'react';
import { Link } from 'react-router-dom';

const SignOutLinks = () => (
            <>
                <Link to="/registration" className="nav-link">Registration</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </>
)

export default SignOutLinks
