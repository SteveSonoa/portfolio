import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
//   Button,
  Image,
	LinkRenderer,
	Menu,
//   Modal,
  PageHeader,
  Text,
  YouTube
} from './components';
import StyleProvider from './hooks/styleContext';
import logo from './logo.svg';
import './App.css';



function App() {
	return (
		<Router>
			<div className="app no-margin">
					<Menu />
					<StyleProvider className="header">
						<PageHeader
							title="Steve's Portfolio"
						/>
					</StyleProvider>
					<StyleProvider className="text">
						<Text tag='p'>
							Edit <code>src/App.js</code> and save to reload.
						</Text>
					</StyleProvider>
					<StyleProvider className="links">
						<LinkRenderer
							className="App-link"
							to="https://reactjs.org"
						>
							<Text tag='p'>Learn React</Text>
						</LinkRenderer>
						<LinkRenderer to="/dude">Dude</LinkRenderer>
					</StyleProvider>
					<StyleProvider className="media">
						<YouTube id='1QhZW1nwOow' />
						<Image src={logo} className="App-logo" alt="logo" title="Cool" text="This is super cool!" />
					</StyleProvider>
			</div>
		</Router>
	);
}

export default App;
