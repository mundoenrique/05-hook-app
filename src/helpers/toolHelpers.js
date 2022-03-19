import { createContext } from 'react';
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';

import defaultConfig from '../config/tenant/novoConfig.json';

export const TenantContext = createContext(null);

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
