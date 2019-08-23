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
import { StyleProvider, useStyleState, useStyleDispatch } from './hooks/styleContext';
import { Styles } from './lib/constants';
import logo from './logo.svg';
import './App.css';

const UpdateStyles = () => {
	const dispatch = useStyleDispatch();
	return (
		<>
			<button onClick={() => dispatch({ type: Styles.dark })}>Dark</button>
			<button onClick={() => dispatch({ type: Styles.light })}>Light</button>
		</>
	);
}

const DisplayStyle = () => {
	const { style } = useStyleState()
	return <div>{`The current style is ${style}`}</div>
}

const HighlightContext = () => {
	const dispatch = useStyleDispatch();
	return (
		<div className="highlight" onMouseEnter={() => dispatch({ type: 'toggle-highlight' })} onMouseLeave={() => dispatch({ type: 'toggle-highlight' })} style={{cursor: 'pointer'}}>
			What is my context?
		</div>
	)
}

function App() {

	return (
    <Router>

		<div className="App">
		<header className="App-header">
			<PageHeader
				title="Steve's Portfolio"
			/>
			<Menu />
			<Text tag='p'>
				Edit <code>src/App.js</code> and save to reload.
			</Text>
			<StyleProvider className="links">
				<LinkRenderer
					className="App-link"
					to="https://reactjs.org"
				>
					Learn React
				</LinkRenderer>
				<DisplayStyle />
				<UpdateStyles />
				<LinkRenderer to="/dude">Dude</LinkRenderer>
				<HighlightContext />
			</StyleProvider>
			<YouTube id='1QhZW1nwOow' />
			<Image src={logo} className="App-logo" alt="logo" />
		</header>
		</div>
    </Router>
  );
}

export default App;
