import { mount, shallow } from 'enzyme';
import AppRouter from '../../../components/09-UseContex/AppRouter';
import { UserContext } from '../../../components/09-UseContex/UserContext';

describe('Pruebas sobre <AppRouter />', () => {
	const user = {
		id: 123,
		name: 'Enrique',
		email: 'mundoenrique@gmail.com',
	};

	const wrapper = shallow(
		<UserContext.Provider value={{ user }}>
			<AppRouter />
		</UserContext.Provider>
	);

	test('Debe renderizar <AppRouter />', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
