import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';

export default function Memorize() {
	const { counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);
	return (
		<>
			<h3>Memorize</h3>
			<br />

			<p>
				Counter <Small value={counter} />
			</p>
			<div className="btn-group" role="group" aria-label="Basic example">
				<button className="btn btn-outline-dark" onClick={() => increment()}>
					+1
				</button>
				<button className="btn btn-outline-info" onClick={() => setShow(!show)}>
					Otra acción ({JSON.stringify(show)})
				</button>
			</div>
		</>
	);
}
