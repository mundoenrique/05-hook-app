import { useEffect, useState } from 'react';
import Message from './Message';

export default function SimpleForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
	});
	const { name, email } = formState;

	useEffect(() => {
		console.log('First time component');
	}, []);

	useEffect(() => {
		console.log('Change on form');
	}, [formState]);

	useEffect(() => {
		console.log('Change on email');
	}, [email]);

	const handleInputChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	return (
		<>
			<h3>SimpleFrom</h3>
			<form>
				<div className="mb-3">
					<input
						type="text"
						name="name"
						className="form-control"
						placeholder="Tu nombre"
						autoComplete="off"
						value={name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						name="email"
						className="form-control"
						placeholder="Tu correo"
						autoComplete="off"
						value={email}
						onChange={handleInputChange}
					/>
				</div>
			</form>
			{name === '123' && <Message />}
		</>
	);
}
