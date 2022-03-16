import CounterApp from './components/01-usestate/CounterApp';
import CounterWithCustomHook from './components/01-usestate/CounterWithCustomHook';
import FormWithCustomHook from './components/02-useeffect/FormWithCustomHook';
import SimpleFrom from './components/02-useeffect/SimpleFrom';
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';

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
			<h2>useEffect</h2>
			<br />
			<SimpleFrom />
			<br />
			<FormWithCustomHook />
			<br />
			<hr />
			<h2>UseFetch</h2>
			<br />
			<MultipleCustomHooks />
		</>
	);
}

export default App;
