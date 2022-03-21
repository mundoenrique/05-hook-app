import { useEffect, useRef, useState } from 'react';

export default function useFetch(url) {
	const isMounted = useRef(true);
	const [state, setState] = useState({});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({
			loading: true,
			error: null,
			data: null,
		});
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				if (isMounted) {
					setState({
						loading: false,
						error: null,
						data,
					});
				}
			})
			.catch(() => {
				setState({
					loading: false,
					error: 'No fue posible obtener información',
					data: null,
				});
			});
	}, [url]);

	return state;
}
