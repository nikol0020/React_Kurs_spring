import React from 'react';
import Footer from './Footer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';

describe('<Footer /> shallow rendering', () => {

    it('should render Footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a div', () => {
        const wrapper = shallow(
            <div className="footer">
                <div className='footer__text'>React Todo App !!!</div>
            </div>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('<div>Something went wrong.</div>', () => {
        const wrapper = shallow(
            <div>React Todo App !!!</div>
        );
        expect(wrapper.find('div').text()).toBe('React Todo App !!!');
    });

});