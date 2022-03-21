import { shallow } from 'enzyme';
import TodoItem from '../../../components/08-useReducer/TodoItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre el componente <TodoItem />', () => {
	const handleToggle = jest.fn();
	const handleDelete = jest.fn();
	const indexArray = 0;

	let wrapper = shallow(
		<TodoItem
			todo={demoTodos[indexArray]}
			index={demoTodos.indexOf(demoTodos[indexArray])}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>
	);

	/* beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(
			<TodoItem
				todo={demoTodos[indexArray]}
				index={demoTodos.indexOf(demoTodos[indexArray])}
				handleDelete={handleDelete}
				handleToggle={handleToggle}
			/>
		);
	}); */

	test('Debe mostrarse correctamente <TodoItem />', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe llamar a la función handleDelete', () => {
		wrapper.find('.btn-danger').simulate('click');

		expect(handleDelete).toBeCalled();
		expect(handleDelete).toHaveBeenCalledTimes(1);
		expect(handleDelete).toHaveBeenCalledWith(demoTodos[indexArray].id);
	});

	test('Debe llamar a la función handleToggle', () => {
		wrapper.find('.p-todo').simulate('click');

		expect(handleToggle).toBeCalled();
		expect(handleToggle).toHaveBeenCalledTimes(1);
		expect(handleToggle).toHaveBeenCalledWith(demoTodos[indexArray].id);
	});

	test('Debe mostrar el texto correspondiente', () => {
		const desc = wrapper.find('.p-todo').text().trim();

		expect(desc).toBe(`${indexArray + 1} ${demoTodos[indexArray].desc}`);
	});

	test('Debe mostrar el todo completado (Class="complete")', () => {
		demoTodos[indexArray].done = true;

		wrapper = shallow(
			<TodoItem
				todo={demoTodos[indexArray]}
				index={demoTodos.indexOf(demoTodos[indexArray])}
				handleDelete={handleDelete}
				handleToggle={handleToggle}
			/>
		);

		const desc = wrapper.find('.p-todo');

		expect(desc.hasClass('complete')).toBe(true);
	});
});
