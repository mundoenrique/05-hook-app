import { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/toolHelpers';
import { useCounter } from '../../hooks/useCounter';

export default function UseMemo() {
	const { counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);
	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

	return (
		<>
			<h3>Memohook</h3>
			<br />

			<p>
				Counter <small> {counter} </small>
			</p>
			<p>{memoProcesoPesado}</p>
			<div className="btn-group" role="group" aria-label="Basic example">
				<button className="btn btn-outline-dark" onClick={() => increment()}>
					+1
				</button>
				<button className="btn btn-outline-info" onClick={() => setShow(!show)}>
					mostrar/ocultar {JSON.stringify(show)}
				</button>
			</div>
		</>
	);
}
