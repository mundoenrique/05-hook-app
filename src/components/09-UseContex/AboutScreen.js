import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function AboutScreen() {
	const { user, setUser } = useContext(UserContext);
	return (
		<>
			<h3>AboutScreen</h3>
			<pre>{JSON.stringify(user, null, 2)}</pre>
			<button className="btn btn-outline-info" onClick={() => setUser({})}>
				Logout
			</button>
		</>
	);
}
