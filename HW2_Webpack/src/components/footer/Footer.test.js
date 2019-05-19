import React from 'react';
import Footer from './Footer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';

describe('<Footer /> shallow rendering', () => {
    // it('should render Footer', () => {
    //     const wrapper = shallow(<Footer />);
    //     expect(wrapper).toMatchSnapshot();
    // });
    it('<h1>React Todo App!!!</h1>', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('h1').text()).toBe('React Todo App!!!');
    });
    // it('matches the snapshot', () => {
    //     const tree = shallow(<Footer />);
    //     expect(toJSON(tree)).toMatchSnapshot();
    // });
});

describe('<Footer />', () => {

     it('renders children when passed in', () => {
        const wrapper = shallow((
            <div className="footer">
                <div className='footer__text'>React Todo App !!!</div>
            </div>
        ));
        expect(wrapper.contains(<div className="footer" />)).to.equel(true);
    });

    // it('should render Footer', () => {
    //     const wrapper = shallow(<Footer />);
    //     expect(wrapper).toMatchSnapshot();
    // });

    it('should render a div', () => {
        const wrapper = shallow(
            <div className="footer">
                <div className='footer__text'>React Todo App !!!</div>
            </div>
        );
        expect(wrapper).toMatchSnapshot();
    });
});