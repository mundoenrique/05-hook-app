import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre <TodoApp />', () => {
	const wrapper = shallow(<TodoApp />);
	Storage.prototype.setItem = jest.fn(() => {});

	test('Debe renderizar <TodoApp />', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe agregar uno TODO', () => {
		const wrapper = mount(<TodoApp />);

		act(() => {
			wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
			wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
		});

		expect(wrapper.find('h3').text().trim()).toBe(
			`TodoApp (${demoTodos.length})`
		);

		expect(localStorage.setItem).toHaveBeenCalledTimes(demoTodos.length);
	});

	test('Debe eliminar un TOdo', () => {
		wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);

		expect(wrapper.find('h3').text().trim()).toBe(`TodoApp (1)`);

		wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

		expect(wrapper.find('h3').text().trim()).toBe(`TodoApp (0)`);
	});
});
