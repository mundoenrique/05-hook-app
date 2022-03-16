import { useRef } from 'react';

export default function FocusScreen() {
	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.select();
	};

	return (
		<>
			<h3>Focus Screen</h3>
			<form>
				<div className="mb-3">
					<input
						ref={inputRef}
						type="text"
						name="name"
						className="form-control"
						placeholder="Tu nombre"
						autoComplete="off"
					/>
				</div>
				<button type="button" className="btn btn-primary" onClick={handleClick}>
					Focus
				</button>
			</form>
		</>
	);
}
