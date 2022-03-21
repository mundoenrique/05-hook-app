import { useEffect, useReducer } from 'react';

import { todoReducer } from '../../helpers/toolHelpers';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const initReducer = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export default function TodoApp() {
	const [todos, dispatch] = useReducer(todoReducer, [], initReducer);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = (todoId) => {
		const action = {
			type: 'delete',
			payload: todoId,
		};

		dispatch(action);
	};

	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
	};

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	};

	return (
		<>
			<h3>TodoApp ({todos.length})</h3>
			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>
				<div className="col-5">
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</>
	);
}
