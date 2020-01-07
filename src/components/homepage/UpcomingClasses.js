import React from 'react';
import { } from 'react-bootstrap';
import { examplesOfClasses } from '../../utils/projects';
import UpcomingClassesCard from './UpcomingClassesCard';

const UpcomingClasses = () => (
    <div className="bg-purple p-xl-2 p-0">
        <h1 className="text-center py-3">Upcoming Classes</h1>
        <div className="d-flex flex-column flex-xl-row">
            {examplesOfClasses.slice(3).map(el => <UpcomingClassesCard key={el.title} title={el.title} description={el.description} image={el.image}/>)}
        </div>
    </div>
)

export default UpcomingClasses;