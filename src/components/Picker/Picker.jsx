import React from 'react';

export default function Picker({
	top,
	onTopChange,
	middle,
	onMiddleChange,
	bottom,
	onBottomChange,
}) {
	const topPics = ['turkey', 'fish', 'monkey'];
	const middlePics = ['torso', 'tshirt', 'tux'];
	const bottomPics = ['legs1', 'legs2', 'cargo'];

	return (
		<div>
			<label>
				Top
				<select value={top} onChange={(e) => onTopChange(e.target.value)}>
					{topPics.map((pic) => (
						<option key={pic}>{pic}</option>
					))}
				</select>
			</label>
			<label>
				Middle
				<select value={middle} onChange={(e) => onMiddleChange(e.target.value)}>
					{middlePics.map((pic) => (
						<option key={pic}>{pic}</option>
					))}
				</select>
			</label>
			<label>
				Bottom
				<select value={bottom} onChange={(e) => onBottomChange(e.target.value)}>
					{bottomPics.map((pic) => (
						<option key={pic}>{pic}</option>
					))}
				</select>
			</label>
		</div>
	);
}
