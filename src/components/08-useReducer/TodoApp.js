import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import useForm from '../../hooks/useForm';

const initReducer = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export default function TodoApp() {
	const [todos, dispatch] = useReducer(todoReducer, [], initReducer);
	const [{ description }, resetForm, handleInputChange] = useForm({
		description: '',
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleAddtodo = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};
		const action = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(action);
		resetForm();
	};

	return (
		<>
			<h3>TodoApp ({todos.length})</h3>
			<div className="row">
				<div className="col-7">
					<ul className="list-group list-group-flush">
						{todos.map((todo, index) => (
							<li className="list-group-item" key={todo.id}>
								<p className="p-todo text-center">
									{index + 1} {todo.desc}
								</p>
								<button className="btn btn-danger">Eliminar</button>
							</li>
						))}
					</ul>
				</div>
				<div className="col-5">
					<h4>agregar TODO</h4>
					<form onSubmit={handleAddtodo}>
						<div className="mb-3">
							<label htmlFor="description" className="form-label">
								descripción de la tarea
							</label>
							<input
								type="text"
								className="form-control"
								name="description"
								id="description"
								autoComplete="off"
								value={description}
								onChange={handleInputChange}
							/>
						</div>
						<div className="d-grid gap-2">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
