import useForm from '../../hooks/useForm';

export default function FormWithCustomHook() {
	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	});
	const { name, email, password } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(formValues);
	};

	return (
		<>
			<h3>FormWithCustomHook</h3>
			<form onSubmit={handleSubmit}>
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
				<div className="mb-3">
					<input
						type="password"
						name="password"
						className="form-control"
						placeholder="Tu contraseña"
						value={password}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</>
	);
}
