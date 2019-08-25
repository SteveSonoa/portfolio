import React from 'react';
import { Route } from 'react-router-dom';

import StyleProvider from '../hooks/styleContext';
import Games from './Games';
import Multimedia from './Multimedia';
import Projects from './Projects';
import Testing from './Testing';
import { Image, LinkRenderer, Text } from '../components';
import logo from '../logo.svg';

export const Home = () => (
    <>
        <Route exact path="/" component={Games} />
        <Route exact path="/games" component={Games} />

        <Route exact path="/" component={Multimedia} />
        <Route exact path="/multimedia" component={Multimedia} />

        <Route exact path="/" component={Projects} />
        <Route exact path="/projects" component={Projects} />

        <Route exact path="/" component={Testing} />
        <Route exact path="/testing" component={Testing} />

        <StyleProvider className="text">
            <Text tag='p'>
                Edit <code>src/App.js</code> and save to reload.
            </Text>
            <LinkRenderer className="App-link" to="https://reactjs.org">Learn React</LinkRenderer>
            <LinkRenderer to="/dude"> Dude</LinkRenderer>
            <LinkRenderer to="/resume.pdf"> File</LinkRenderer>
        </StyleProvider>
        <StyleProvider className="media">
            <Image src={logo} className="App-logo" alt="logo" title="Cool" text="This is super cool!" />
        </StyleProvider>
    </>
);

export default Home;
