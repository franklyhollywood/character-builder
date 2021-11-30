import React, { useState } from 'react';
import './App.css';
import Character from './components/Character/Character.jsx';
import Picker from './components/Picker/Picker.jsx';
import Display from './components/Display/Display.jsx';

function App() {
	//state for:
	// Top, bottom, middle
	// catchprase and catchphrase memory
	const [top, setTop] = useState('fish');
	const [middle, setMiddle] = useState('tux');
	const [bottom, setBottom] = useState('legs1');

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Character Picker</h1>
				<Picker
					top={top}
					onTopChange={setTop}
					middle={middle}
					onMiddleChange={setMiddle}
					bottom={bottom}
					onBottomChange={setBottom}
				/>
				<Character top={top} middle={middle} bottom={bottom} />
			</header>
		</div>
	);
}

export default App;
