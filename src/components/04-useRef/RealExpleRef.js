import { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

export default function RealExpleRef() {
	const [show, setShow] = useState(false);

	return (
		<>
			<h3>RealExpleRef</h3>
			<button className="btn btn-info" onClick={() => setShow(!show)}>
				Mostrar/Ocultar
			</button>
			{show && <MultipleCustomHooks />}
		</>
	);
}
