import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
	// Button,
	// Image,
	LinkRenderer,
	Menu,
	// Modal,
	// PageHeader,
	Text,
	// YouTube
} from './components';
import StyleProvider from './hooks/styleContext';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './App.css';

const App = () => (
	<Router>
		<div className="app no-margin">
			<Menu />
			<div className={`page-content-background`}>
				<div className="stripe" />
			</div>
			<div className={`page-content`}>
				<StyleProvider className="header">
					<Text tag='h1'>Steve's Portfolio</Text>
				</StyleProvider>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/games" component={Home} />
					<Route exact path="/layout" component={Home} />
					<Route exact path="/projects" component={Home} />
					<Route exact path="/testing" component={Home} />
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
);

export default App;
