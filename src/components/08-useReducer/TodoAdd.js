import React from 'react';
import useForm from '../../hooks/useForm';

export default function TodoAdd({ handleAddTodo }) {
	const [{ description }, handleInputChange, resetForm] = useForm({
		description: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		handleAddTodo(newTodo);
		resetForm();
	};

	return (
		<>
			<h4>agregar TODO</h4>
			<form onSubmit={handleSubmit}>
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
		</>
	);
}
