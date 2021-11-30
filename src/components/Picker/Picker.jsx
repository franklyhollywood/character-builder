import React from 'react';

export default function Picker() {
	return <div>
        <label>Top
            <select value={top} onChange{(e) => onTopChange(e.target.value)}>
            {topPics.map((pic) => (
                <option key={pic}>{pic}</option>

            ))}
            </select>
        </label>

    </div>;
}
