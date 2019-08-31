import React from 'react';
import { Route } from 'react-router-dom';

import Games from './Games';
import Multimedia from './Multimedia';
import Projects from './Projects';
import Technology from './Technology';

export const Home = () => (
    <>
        <Route exact path="/" component={Projects} />
        <Route exact path="/projects" component={Projects} />

        <Route exact path="/" component={Games} />
        <Route exact path="/games" component={Games} />

        <Route exact path="/" component={Multimedia} />
        <Route exact path="/multimedia" component={Multimedia} />

        <Route exact path="/" component={Technology} />
        <Route exact path="/technology" component={Technology} />
    </>
);

export default Home;
