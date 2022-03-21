import { shallow } from 'enzyme';
import RealExpleRef from '../../../components/04-useRef/RealExpleRef';

describe('Pruebas sobre el componente <RealExpleRef />', () => {
	const wrapper = shallow(<RealExpleRef />);
	test('Debe renderizar correctamente el componente <RealExpleRef />', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
	});

	test('Debe renderizar correctamente el componente <MultipleCustomHooks />', () => {
		wrapper.find('.btn-info').simulate('click');

		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
	});
});
