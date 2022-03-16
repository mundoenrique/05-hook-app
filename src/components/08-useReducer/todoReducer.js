export const todoReducer = (state = [], action) => {
	const { type } = action;

	switch (type) {
		case 'add':
			return [...state, action.payload];

		default:
			return state;
	}
};
