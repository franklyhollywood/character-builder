import React, { useState } from 'react';
import './App.css';
import Character from './components/Character/Character.jsx';
import Picker from './components/Picker/Picker.jsx';
import PhraseGenerator from './components/PhraseGenerator/PhraseGenerator.jsx';

function App() {
	//state for:
	// Top, bottom, middle
	// catchprase and catchphrase memory
	const [top, setTop] = useState('monkey');
	const [middle, setMiddle] = useState('tshirt');
	const [bottom, setBottom] = useState('cargo');
	const [phrase, setPhrase] = useState('');
	const [showPhrase, setShowPhrase] = useState([]);

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
				<PhraseGenerator
					phrase={phrase}
					onSetPhrase={setPhrase}
					showPhrase={showPhrase}
					onSetShowPhrase={setShowPhrase}
				/>
			</header>
		</div>
	);
}

export default App;
