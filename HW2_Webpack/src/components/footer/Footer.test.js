import React from 'react';
import Footer from './Footer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

describe('<Footer /> shallow rendering', () => {

    it('matches the snapshot Footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });


    it('<h2>React Todo App !!!</h2>', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('h2').text()).toBe('React Todo App !!!');
    });

});
