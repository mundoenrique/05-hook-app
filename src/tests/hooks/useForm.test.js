import { act, renderHook } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('Pruebas sobre el customHook <useForm />', () => {
	const initialForm = {
		name: 'Enrique',
		email: 'epenaloza@gmail.com',
	};

	test('Debe regresar un fomrulario por defecto', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [formValues, handleFormValues, resetForm] = result.current;

		expect(formValues).toEqual(initialForm);
		expect(typeof handleFormValues).toBe('function');
		expect(typeof resetForm).toBe('function');
	});

	test('Debe cambiar los valoes del formulario', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleFormValues] = result.current;

		act(() => {
			handleFormValues({
				target: {
					name: 'name',
					value: 'Yayita',
				},
			});
		});

		const [formValues] = result.current;

		expect(formValues).toEqual({ ...initialForm, name: 'Yayita' });
	});

	test('Debe restablecer los valores del formulasio', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleFormValues, reset] = result.current;

		act(() => {
			handleFormValues({
				target: {
					name: 'name',
					value: 'Yayita',
				},
			});

			reset();
		});

		const [formValues] = result.current;

		expect(formValues).toEqual(initialForm);
	});
});
