import React from 'react';

export default function Character({ top, middle, bottom }) {
	return (
		<React.Fragment>
			<br />
			<div
				className='top'
				style={{
					backgroundImage: `url(./${top}-top.jpg)`,
					height: 150,
					width: 150,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			></div>
			<div
				className='middle'
				style={{
					backgroundImage: `url(./${middle}-middle.jpg)`,
					height: 150,
					width: 150,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			></div>
			<div
				className='bottom'
				style={{
					backgroundImage: `url(./${bottom}-bottom.jpg)`,
					height: 150,
					width: 150,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			></div>
		</React.Fragment>
	);
}
