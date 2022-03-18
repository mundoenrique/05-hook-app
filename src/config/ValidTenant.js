import { Outlet, useParams } from 'react-router-dom';

export default function ValidTenant() {
	const { urlTenant } = useParams();

	return urlTenant === 'novo' ? <Outlet /> : <h1>No found</h1>;
}
