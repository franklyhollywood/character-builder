import { screen, render } from '@testing-library/react';
import Picker from './Picker';

it('should render the dropdown components', () => {
	const { container } = render(<Picker />);
	const selectTop = screen.getByLabelText(/Top/);
	const selectMiddle = screen.getByLabelText(/Middle/);
	const selectBottom = screen.getByLabelText(/Bottom/);

	expect(selectTop).toBeInTheDocument();
	expect(selectMiddle).toBeInTheDocument();
	expect(selectBottom).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
