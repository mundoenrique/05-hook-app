import TodoItem from './TodoItem';

export default function TodoList({ todos, handleDelete, handleToggle }) {
	return (
		<ul className="list-group list-group-flush">
			{todos.map((todo, index) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					index={index}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
				/>
			))}
		</ul>
	);
}
