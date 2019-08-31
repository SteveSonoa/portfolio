import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
	Image,
	LinkRenderer,
	Navbar
} from './components';
import StyleProvider from './hooks/styleContext';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import logo from './logo.svg';
import './App.css';

const App = () => {

	return (
		<Router>
			<div className="app no-margin">
				<div className={`page-content-background`}>
					<Image src={logo} className="App-logo" alt="logo" title="Cool" text="This is super cool!" />
					<div className="stripe" />
				</div>
				<Navbar />
				<div className={`page-content`}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/games" component={Home} />
						<Route exact path="/multimedia" component={Home} />
						<Route exact path="/projects" component={Home} />
						<Route exact path="/technology" component={Home} />
						<Route component={NoMatch} />
					</Switch>
					<div className="footer">
						<StyleProvider footer className="footer">
							<LinkRenderer to='https://github.com/SteveSonoa/portfolio'>View this project on GitHub</LinkRenderer>
						</StyleProvider>
					</div>
				</div>
			</div>
		</Router>
	)
};

export default App;
