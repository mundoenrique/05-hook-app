import { shallow } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre <TodoList />', () => {
	const handleToggle = jest.fn();
	const handleDelete = jest.fn();

	const wrapper = shallow(
		<TodoList
			todos={demoTodos}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>
	);

	test('Debe renderizar el componente <TodoList />', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe tener dos  <TodoItem />', () => {
		expect(wrapper.find('TodoItem').length).toBe(demoTodos.length);

		expect(wrapper.find('TodoItem').at(0).prop('handleDelete')).toEqual(
			expect.any(Function)
		);

		expect(wrapper.find('TodoItem').at(0).prop('handleToggle')).toEqual(
			expect.any(Function)
		);
	});
});
