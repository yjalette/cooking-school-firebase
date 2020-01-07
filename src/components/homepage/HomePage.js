import React, { Component } from 'react';

import About from './About'
import Header from './Header';
import BlockQuote from './BlockQuote';
import Gallery from './Gallery';
import Classes from './Classes';
import OnlineLessons from './OnlineLessons';
import UpcomingClasses from './UpcomingClasses';

export class HomePage extends Component {
    render() {
        return (
            <>
                <Header />
                <About />
                <BlockQuote />
                <Classes />
                <Gallery />
                <OnlineLessons />
                <UpcomingClasses />
            </>
        )
    }
}

export default HomePage
