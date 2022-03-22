import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../../../components/09-UseContex/AppRouter';
import { UserContext } from '../../../components/09-UseContex/UserContext';

describe('Pruebas sobre <AppRouter />', () => {
	const user = {
		id: 123,
		name: 'Enrique',
		email: 'mundoenrique@gmail.com',
	};

	const wrapper = mount(
		<UserContext.Provider value={{ user }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</UserContext.Provider>
	);

	test('Debe renderizar <AppRouter />', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
