import { renderHook } from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('Pruebas sobre el hook <useFetch />', () => {
	test('Debe traer lainformación por defecto', async () => {
		const url = 'https://breakingbadapi.com/api/quotes/1';
		const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
		const { data, loading, error } = result.current;

		await waitForNextUpdate();

		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(null);
	});

	test('Debe obtener la respuesta del API', async () => {
		const url = 'https://breakingbadapi.com/api/quotes/1';
		const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

		await waitForNextUpdate();

		const { data, loading, error } = result.current;

		expect(data.length).toBe(1);
		expect(loading).toBe(false);
		expect(error).toBe(null);
	});

	test('Debe manejar el error del API', async () => {
		const url = 'https://reqres.in/apiD/users?page=2';
		const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

		await waitForNextUpdate();

		const { data, loading, error } = result.current;

		expect(data).toBe(null);
		expect(loading).toBe(false);
		expect(error).toBe('No fue posible obtener información');
	});
});
