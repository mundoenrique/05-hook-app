import { createContext } from 'react';
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';

import defaultConfig from '../config/tenant/novoConfig.json';

export const TenantContext = createContext(null);

export const todoReducer = (state = [], action) => {
	const { type } = action;

	switch (type) {
		case 'add':
			return [...state, action.payload];
		case 'delete':
			return state.filter((todo) => todo.id !== action.payload);
		case 'toggle':
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo
			);
		case 'toggle-old':
			return state.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				} else {
					return todo;
				}
			});

		default:
			return state;
	}
};

export function procesoPesado(iteraciones) {
	for (let i = 0; i < iteraciones; i++) {
		console.log(`Iteración`);
	}

	return `${iteraciones} realizadas`;
}

export function tenantFeatures(urlTenant) {
	const { tenant } = defaultConfig;
	let appConfig = { ...defaultConfig };

	if (tenant !== urlTenant) {
		const tenantConfig = fileExist(urlTenant);
		appConfig = tenantConfig && { ...appConfig, ...tenantConfig };
	}

	return appConfig;
}

function fileExist(file) {
	try {
		return require(`../config/tenant/${file}Config.json`);
	} catch (error) {
		return false;
	}
}

export function NavItemLink({ children, to, className = '', ...props }) {
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });

	return (
		<>
			<Link
				className={match ? `${className} active` : className}
				to={to}
				{...props}
			>
				{children}
			</Link>
		</>
	);
}

export function NavBarLink({ children, to, className = '', ...props }) {
	return (
		<>
			<NavLink
				className={({ isActive }) =>
					isActive ? `${className} active chow` : className
				}
				to={to}
				{...props}
			>
				{children}
			</NavLink>
		</>
	);
}
