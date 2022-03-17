import React from 'react';

export default function TodoItem({ todo, handleToggle, index, handleDelete }) {
	return (
		<li className="list-group-item" key={todo.id}>
			<p
				className={`p-todo ${todo.done && 'complete'}`}
				onClick={() => handleToggle(todo.id)}
			>
				{index + 1} {todo.desc}
			</p>
			<button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
				Eliminar
			</button>
		</li>
	);
}
