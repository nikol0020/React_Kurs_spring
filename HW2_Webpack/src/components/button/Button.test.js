import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<Button /> shallow rendering', () => {

    it('matches the snapshot Button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a input', () => {
        const wrapper = shallow(
            <input/>
        );
        expect(wrapper).toMatchSnapshot();
    });

});
