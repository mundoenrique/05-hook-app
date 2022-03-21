import { todoReducer } from '../../helpers/toolHelpers';
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas sobre toolHelpers', () => {
	test('Debe retornar el estado por defecto', () => {
		const state = todoReducer(demoTodos, {});

		expect(state).toEqual(demoTodos);
	});

	test('Debe agregar un TODO', () => {
		const newtodo = {
			id: 3,
			desc: 'Aprender Azyme',
		};

		const state = todoReducer(demoTodos, {
			type: 'add',
			payload: newtodo,
		});

		expect(state.length).toBe(3);
		expect(state[2]).toEqual(newtodo);
		expect(state).toEqual([...demoTodos, newtodo]);
	});

	test('Debe Eliminar un TODO', () => {
		const state = todoReducer(demoTodos, {
			type: 'delete',
			payload: 1,
		});

		expect(state.length).toBe(1);
		expect(state).toEqual([demoTodos[1]]);
	});

	test('Debe hacer toggle del TODO', () => {
		const state = todoReducer(demoTodos, {
			type: 'toggle',
			payload: 1,
		});

		expect(state[0].done).toBe(true);
		expect(state[1]).toEqual(demoTodos[1]);
	});
});
