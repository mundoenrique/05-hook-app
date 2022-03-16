import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

export default function LayoutEffect() {
	const { counter, increment } = useCounter(1);
	const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
	const { quote } = !!data && data[0];

	const pTag = useRef();
	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<>
			<h3>LayoutEffect</h3>
			<br />
			<pre>{JSON.stringify(boxSize, null, 3)}</pre>
			<blockquote className="blockquote blockquote-our text-end">
				<p className="mb-2" ref={pTag}>
					{quote}
				</p>
			</blockquote>
			<button className="btn btn-outline-primary" onClick={() => increment()}>
				Siguiente frase
			</button>
		</>
	);
}
