import React from 'react';
import Sort from './Sort';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<Sort /> shallow rendering', () => {

    it('matches the snapshot Sort', () => {
        const wrapper = shallow(<Sort />);
        expect(wrapper).toMatchSnapshot();
    });

    it('<span>Sort by</span>', () => {
        const wrapper = shallow(<Sort />);
        expect(wrapper.find('span').text()).toBe('Sort by');
    });

    it('should render a div', () => {
        const wrapper = shallow(
            <div className="sort"></div>
        );
        expect(wrapper).toMatchSnapshot();
    });
});