import { useCounter } from '../../hooks/useCounter';

export default function CounterWithCustomHook() {
	const [inc, dec] = [2, 1];
	const { state, increment, decrement, reset } = useCounter(100);
	return (
		<>
			<h1>Counter with Hook {state}</h1>
			<div className="btn-group" role="group" aria-label="Basic example">
				<button className="btn btn-primary" onClick={() => increment(inc)}>
					+{inc}
				</button>
				<button className="btn btn-outline-primary" onClick={reset}>
					Reset
				</button>
				<button className="btn btn-primary" onClick={() => decrement()}>
					-{dec}
				</button>
			</div>
		</>
	);
}
