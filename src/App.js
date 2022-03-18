import { useParams } from 'react-router-dom';
import { TenantContext, tenantFeatures } from './helpers/toolHelpers';
import MainRouter from './routers/MainRouter';

function App() {
	const { urlTenant } = useParams();
	const configTenant = tenantFeatures(urlTenant);

	return (
		<>
			{configTenant ? (
				<TenantContext.Provider value={configTenant}>
					<MainRouter />
				</TenantContext.Provider>
			) : (
				<h1>No found</h1>
			)}
		</>
	);
}

export default App;
