import { useState } from 'react';
import AppRouter from './AppRouter';
import { UserContext } from './UserContext';

export default function MainApp() {
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			<AppRouter />
		</UserContext.Provider>
	);
}
