import React, { useState } from 'react';
import './App.css';
import Character from './components/Character/Character.jsx';
import Picker from './components/Picker/Picker.jsx';
import Display from './components/Display/Display.jsx';

function App() {
	//state for:
	// Top, bottom, middle
	// catchprase and catchphrase memory
	const [top, setTop] = useState('');
	const [middle, setMiddle] = useState('');
	const [bottom, setBottom] = useState('');

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Character Picker</h1>
				<Picker />
			</header>
		</div>
	);
}

export default App;
