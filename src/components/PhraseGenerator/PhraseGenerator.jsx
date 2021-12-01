import React from 'react';

export default function PhraseGenerator({
	phrase,
	onSetPhrase,
	showPhrase,
	onSetShowPhrase,
}) {
	return (
		<div>
			<br />
			{/* need to add text input field
			    need to add button 
				need to add state to text field */}
			Add da catchphrase:
			<form
				//Because we are in a form it has to be onSUBMIT, and
				// you have to prevent default.
				onSubmit={(e) => {
					e.preventDefault();
					onSetShowPhrase((currentState) => [...currentState, phrase]);
				}}
			>
				<input
					type='text'
					value={phrase}
					onChange={(e) => onSetPhrase(e.target.value)}
				/>
				<button>Add</button>
			</form>
			<ul>
				{showPhrase.map((phrase) => (
					<li key={phrase}>{phrase}</li>
				))}
			</ul>
		</div>
	);
}
