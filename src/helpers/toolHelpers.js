import { createContext } from 'react';

export function procesoPesado(iteraciones) {
	for (let i = 0; i < iteraciones; i++) {
		// console.log(`Iteración ${i}`);
	}

	return `${iteraciones} realizadas`;
}

export const TenantContext = createContext(null);
