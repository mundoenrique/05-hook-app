import { useState } from 'react';

export default function useForm(initialState = {}) {
	const [values, setValues] = useState(initialState);

	const resetForm = () => {
		setValues(initialState);
	};

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return [values, resetForm, handleInputChange];
}
