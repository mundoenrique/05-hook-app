import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas sobre <TodoAdd />', () => {
	const handleAddTodo = jest.fn();

	const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

	test('debe mostrar el componente <TodoAdd />', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('No debe llamar handleAddTodo', () => {
		const formSubmit = wrapper.find('form').prop('onSubmit');

		formSubmit({ preventDefault() {} });

		expect(handleAddTodo).not.toHaveBeenCalled();
		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	test('Debe llamar handleAddTodo 1', () => {
		const value = 'Aprender React';

		const inputOnchnage = wrapper.find('input').prop('onChange');

		inputOnchnage({
			target: {
				value,
				name: 'description',
			},
		});

		const formSubmit = wrapper.find('form').prop('onSubmit');

		formSubmit({ preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalled();
	});

	test('Debe llamar handleAddTodo 2', () => {
		const value = 'Aprender React';

		wrapper
			.find('input')
			.simulate('change', { target: { value, name: 'description' } });

		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number),
			desc: value,
			done: false,
		});
	});

	expect(wrapper.find('input').prop('value')).toBe('');
});
