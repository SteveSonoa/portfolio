import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
//   Button,
  Image,
  LinkRenderer,
//   Modal,
  PageHeader,
  Text
} from './components';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>

		<div className="App">
		<header className="App-header">
			<PageHeader
			title="Steve's Portfolio"
			/>
			<Image src={logo} className="App-logo" alt="logo" />
			<Text tag='p'>
			Edit <code>src/App.js</code> and save to reload.
			</Text>
			<LinkRenderer
			className="App-link"
			to="https://reactjs.org"
			>
			Learn React
			</LinkRenderer>
			<LinkRenderer to="/dude">Dude</LinkRenderer>
		</header>
		</div>
    </Router>
  );
}

export default App;
