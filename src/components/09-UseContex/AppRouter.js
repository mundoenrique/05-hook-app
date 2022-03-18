import { Routes, Route } from 'react-router-dom';

import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

export default function AppRouter() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Routes>
					<Route path="home" element={<HomeScreen />} />
					<Route path="about" element={<AboutScreen />} />
					<Route path="login" element={<LoginScreen />} />
				</Routes>
			</div>
		</div>
	);
}
