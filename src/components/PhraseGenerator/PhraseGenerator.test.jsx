import { screen, render } from '@testing-library/react';
import PhraseGenerator from './PhraseGenerator';

it('should render the catchphrase input', () => {
	const { container } = render(
		<PhraseGenerator showPhrase={['tree', 'forest']} />
	);
	expect(container).toMatchSnapshot();
});
