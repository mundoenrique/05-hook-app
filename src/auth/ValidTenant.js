import { Outlet, useParams } from 'react-router-dom';

export default function ValidTenant() {
	const { tenant } = useParams();

	return tenant === 'novo' ? <Outlet tenant={tenant} /> : <h1>No found</h1>;
}
