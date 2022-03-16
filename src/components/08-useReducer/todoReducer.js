export const todoReducer = (state = [], action) => {
	const { type } = action;

	switch (type) {
		case 'add':
			return [...state, action.payload];
		case 'delete':
			return state.filter((todo) => todo.id !== action.payload);

		default:
			return state;
	}
};
