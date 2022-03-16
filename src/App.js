import CounterApp from './components/01-usestate/CounterApp';
import CounterWithCustomHook from './components/01-usestate/CounterWithCustomHook';
import FormWithCustomHook from './components/02-useeffect/FormWithCustomHook';
import SimpleFrom from './components/02-useeffect/SimpleFrom';
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
import FocusScreen from './components/04-useRef/FocusScreen';
import RealExpleRef from './components/04-useRef/RealExpleRef';
import LayoutEffect from './components/05-LayoutEffect/LayoutEffect';
import Memorize from './components/06-memos/Memorize';

function App() {
	return (
		<>
			<h1>Uso de hooks ReactJs</h1>
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
			<br />
			<hr />
			<h2>UseRef</h2>
			<br />
			<FocusScreen />
			<br />
			<RealExpleRef />
			<br />
			<hr />
			<h2>useLayoutEffect</h2>
			<LayoutEffect />
			<br />
			<hr />
			<h2>useMemo</h2>
			<Memorize />
		</>
	);
}

export default App;
