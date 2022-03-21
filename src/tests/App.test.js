import { shallow } from 'enzyme';
import App from '../App';

describe('Prueba en componente <App />', () => {
	test('Debe mostrarse correctamente el componene <App />', () => {
		const wrapper = shallow(<App />);

		expect(wrapper).toMatchSnapshot();
	});
});
