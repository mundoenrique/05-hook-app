import { mount } from 'enzyme';
import LoginScreen from '../../../components/09-UseContex/LoginScreen';
import { UserContext } from '../../../components/09-UseContex/UserContext';

describe('Pruebas sobre <LoginScreen />', () => {
	const setUser = jest.fn();

	const wrapper = mount(
		<UserContext.Provider value={{ setUser }}>
			<LoginScreen />
		</UserContext.Provider>
	);

	test('Debe renderizar <LoginScreen />', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe ejecutar setUser con los argumentos esperados', () => {
		const user = {
			id: 1234,
			name: 'Enrique',
			email: 'mundoenrique@gmail.com',
		};

		wrapper.find('button').prop('onClick')(() => setUser(user));

		expect(setUser).toHaveBeenCalled();
		expect(setUser).toHaveBeenCalledWith(user);
	});
});
