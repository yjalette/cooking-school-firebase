import React from 'react';
import ProjectsList from './ProjectsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications';


const ProjectsView = ({projects, auth }) => {
    if (!auth.uid) return <Redirect to='/registration' />
        return (
            <div className="d-flex flex-column bg-beige">
                <h1 className="text-center my-5">Upcoming Classes</h1>
                <ProjectsList projects={projects} auth={auth}/>
                {/* <Notifications /> */}
            </div>
        )
}

const mapStateToProps = state => {  
    return {
        projects: state.firestore.ordered.classes,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'classes' }
    ])
)(ProjectsView);