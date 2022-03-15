import { useState } from 'react';
import './counter.css';

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
			<h1>Counter {counter1}</h1>
			<h1>Counter {counter2}</h1>
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
