import { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

export default function CallbackHook() {
	const [counter, setCounter] = useState(10);

	const incremement = useCallback(
		(factor) => {
			setCounter((c) => c + factor);
		},
		[setCounter]
	);

	return (
		<>
			<h3>CallbackHook</h3>
			<p>counter {counter}</p>
			<ShowIncrement incremement={incremement} />
		</>
	);
}
