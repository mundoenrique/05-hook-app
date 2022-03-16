import { useEffect, useState } from 'react';

export default function useFetch(url) {
	const [state, setState] = useState({});

	useEffect(() => {
		setState({
			loading: true,
			error: null,
			data: null,
		});
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setState({
					loading: false,
					error: null,
					data,
				});
			});
	}, [url]);

	return state;
}
