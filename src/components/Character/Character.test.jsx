import { screen, render } from '@testing-library/react';
import Character from './Character';

it('should test da page', () => {
	render(<Character top='fish' middle='torso' bottom='legs1' />);
	const top = screen.getByLabelText('top');
	expect(top).toMatchSnapshot();
});
