import { Outlet, useParams } from 'react-router-dom';
import { TenantContext, tenantFeatures } from './helpers/toolHelpers';

function App() {
	const { urlTenant } = useParams();
	const configTenant = tenantFeatures(urlTenant);

	return (
		<>
			{configTenant ? (
				<TenantContext.Provider value={configTenant}>
					<Outlet />
				</TenantContext.Provider>
			) : (
				<h1>No found</h1>
			)}
		</>
	);
}

export default App;
