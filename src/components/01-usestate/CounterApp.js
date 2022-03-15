import { useState } from 'react';

import CounterWithCustomHook from './CounterWithCustomHook';

export default function CounterApp() {
	const [counters, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
		counter4: 40,
	});
	const { counter1, counter2 } = counters;

	return (
		<>
			<h3>Counter1 {counter1}</h3>
			<h3>Counter2 {counter2}</h3>
			<br />
			<button
				className="btn btn-primary"
				onClick={() => {
					setCounter({
						...counters,
						counter1: counter1 + 1,
					});
				}}
			>
				+1
			</button>
		</>
	);
}
