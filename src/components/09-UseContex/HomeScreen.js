import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function HomeScreen() {
	const { user } = useContext(UserContext);

	return (
		<>
			<h3>HomeScreen</h3>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</>
	);
}
