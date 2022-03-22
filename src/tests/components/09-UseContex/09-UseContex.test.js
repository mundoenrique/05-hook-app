import { mount } from 'enzyme';
import HomeScreen from '../../../components/09-UseContex/HomeScreen';
import { UserContext } from '../../../components/09-UseContex/UserContext';

describe('Pruebas sobre <HomeScreen />', () => {
	const user = {
		name: 'Enrique',
		email: 'mundoenrique@gmail.com',
	};
	const wrapper = mount(
		<UserContext.Provider value={{ user }}>
			<HomeScreen />
		</UserContext.Provider>
	);

	test('Debe renderizar <HomeScreen />', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
