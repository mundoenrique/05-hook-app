import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function LoginScreen() {
	const { setUser } = useContext(UserContext);

	return (
		<>
			<h3>LoginScreen</h3>
			<button
				className="btn btn-primary"
				onClick={() =>
					setUser({
						id: 1234,
						name: 'Enrique',
						email: 'mundoenrique@gmail.com',
					})
				}
			>
				Login
			</button>
		</>
	);
}
