import { createContext } from 'react';
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
