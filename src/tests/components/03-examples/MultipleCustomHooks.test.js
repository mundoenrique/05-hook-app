import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas sobre <MultipleCustomHooks />', () => {
	useCounter.mockReturnValue({
		counter: 10,
		increment: () => {},
	});

	test('debe renderizar correctamente <MultipleCustomHooks />', () => {
		useCounter.mockReturnValue({
			counter: 10,
			increment: () => {},
		});

		useFetch.mockReturnValue({
			loading: true,
			error: null,
			data: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar la información', () => {
		const author = 'Enrique';
		const quote = 'Holamundo';

		useCounter.mockReturnValue({
			counter: 10,
			increment: () => {},
		});

		useFetch.mockReturnValue({
			loading: false,
			error: null,
			data: [
				{
					author: author,
					quote: quote,
				},
			],
		});

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper.find('.alert').exists()).toBe(false);
		expect(wrapper.find('.mb-2').text().trim()).toBe(quote);
		expect(wrapper.find('.blockquote-footer').text().trim()).toBe(author);
	});
});
