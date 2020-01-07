import React from 'react';
import ProjectView from '../projects/ProjectsView';
import UpcomingClasses from '../homepage/UpcomingClasses';

const MyClasses = ({ projects }) => {
    console.log(projects)
    return (
        <>
            <div className="p-3 flex flex-column mb-5">
                <h2>You have no classes scheduled</h2>
            </div>
            {/* <ProjectView /> */}
            <div className="h-50">
                <UpcomingClasses />
            </div>

        </>
    )
}

export default MyClasses
