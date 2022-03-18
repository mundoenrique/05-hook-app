import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from '../App';
import CounterApp from '../components/01-usestate/CounterApp';
import CounterWithCustomHook from '../components/01-usestate/CounterWithCustomHook';
import UseState from '../components/01-usestate/UseState';
import FormWithCustomHook from '../components/02-useeffect/FormWithCustomHook';
import SimpleForm from '../components/02-useeffect/SimpleForm';
import UseEffect from '../components/02-useeffect/UseEffect';
import Examples from '../components/03-examples/Examples';
import MultipleCustomHooks from '../components/03-examples/MultipleCustomHooks';
import FocusScreen from '../components/04-useRef/FocusScreen';
import RealExpleRef from '../components/04-useRef/RealExpleRef';
import UseRef from '../components/04-useRef/UseRef';
import LayoutEffect from '../components/05-LayoutEffect/LayoutEffect';
import UseLayoutEffect from '../components/05-LayoutEffect/UseLayoutEffect';
import CallbackHook from '../components/06-memos/CallbackHook';
import Memorize from '../components/06-memos/Memorize';
import UseMemo from '../components/06-memos/UseMemo';
import UseMemos from '../components/06-memos/UseMemos';
import { Padre } from '../components/07-tarea-memo/Padre';
import TodoApp from '../components/08-useReducer/TodoApp';
import UseReducer from '../components/08-useReducer/UseReducer';
import MainApp from '../components/09-UseContex/MainApp';
import UseContex from '../components/09-UseContex/UseContex';
import NavBarMain from '../components/NavBarMain';

export default function MainRouter() {
	return (
		<>
			<NavBarMain />
			<div className="container">
				<Routes>
					<Route path="/:urlTenant" element={<App />}>
						<Route path="use-state" element={<UseState />}>
							<Route path="counter" element={<CounterApp />} />
							<Route path="counter-hook" element={<CounterWithCustomHook />} />
						</Route>
						<Route path="use-effect" element={<UseEffect />}>
							<Route path="simple-form" element={<SimpleForm />} />
							<Route path="hook-form" element={<FormWithCustomHook />} />
						</Route>
						<Route path="examples" element={<Examples />}>
							<Route path="hooks-multiple" element={<MultipleCustomHooks />} />
						</Route>
						<Route path="use-ref" element={<UseRef />}>
							<Route path="focus-screen" element={<FocusScreen />} />
							<Route path="example-ref" element={<RealExpleRef />} />
						</Route>
						<Route path="use-layout-effect" element={<UseLayoutEffect />}>
							<Route path="example-layout" element={<LayoutEffect />} />
						</Route>
						<Route path="use-memo" element={<UseMemos />}>
							<Route path="memorize" element={<Memorize />} />
							<Route path="memo-hook" element={<UseMemo />} />
							<Route path="callback-hook" element={<CallbackHook />} />
							<Route path="example-memo" element={<Padre />} />
						</Route>
						<Route path="use-reducer" element={<UseReducer />}>
							<Route path="example-reducer" element={<TodoApp />} />
						</Route>
						<Route path="use-context" element={<UseContex />}>
							<Route path="example-contex/*" element={<MainApp />} />
						</Route>
						<Route path="*" element={<h1>No found</h1>} />
					</Route>
					<Route path="*" element={<h1>No found</h1>} />
				</Routes>
			</div>
		</>
	);
}
