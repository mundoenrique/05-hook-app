import CounterApp from './components/01-usestate/CounterApp';
import CounterWithCustomHook from './components/01-usestate/CounterWithCustomHook';
import SimpleFrom from './components/02-useeffect/SimpleFrom';

function App() {
	return (
		<>
			<h1>Uso de hooks ReactJs</h1>
			<br />
			<hr />
			<h2>useState</h2>
			<br />
			<CounterApp />
			<br />
			<CounterWithCustomHook />
			<br />
			<hr />
			<h2>useeffect</h2>
			<br />
			<SimpleFrom />
			<br />
			<hr />
		</>
	);
}

export default App;
