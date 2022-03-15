import CounterApp from './components/01-usestate/CounterApp';
import CounterWithCustomHook from './components/01-usestate/CounterWithCustomHook';

function App() {
	return (
		<>
			<h1>Uso de hooks ReactJs</h1>
			<br />
			<hr />
			<CounterApp />
			<br />
			<hr />
			<CounterWithCustomHook />
			<br />
			<hr />
		</>
	);
}

export default App;
