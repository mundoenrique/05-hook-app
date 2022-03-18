// import OldApp from './OldApp'; //eliminar al final
import { createContext } from 'react';
import MainRouter from './routers/MainRouter';
const customer = { tenant: 'novo' };

function App() {
	return (
		<>
			<TenantContext.Provider value={customer}>
				<MainRouter />
			</TenantContext.Provider>
			{/* <OldApp /> */}
		</>
	);
}

export default App;

export const TenantContext = createContext(customer);
