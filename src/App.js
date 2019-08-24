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
					<Text tag='p'>Thank you for visiting my online web design portfolio! Please browse through my production-level content, side projects, and code samples.</Text>
					<Text tag='p'>In addition to my work examples, this portfolio itself is an example of various technologies. You'll find React Hooks and Context being used; you can freely change the context and view the Provider scope for each section.</Text>
					<Text tag='p'>The site also uses Redux and Sagas to control a global variable state. You are free to open Chrome's Redux Dev Tools and explore what's being stored (the menu state, and the API result of your selections).</Text>
					<Text tag='p'>Finally, if you explore the source code itself, you will see a combination of CSS Flexbox and CSS Grid being used in various places. I encourage you to open your console and mock other device sizes, as even the order changes to the best UX conditions based on the user's device.</Text>
				</StyleProvider>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/games" component={Home} />
					<Route exact path="/multimedia" component={Home} />
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
