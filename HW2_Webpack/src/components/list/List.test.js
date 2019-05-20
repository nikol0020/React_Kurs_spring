import React from 'react';
import List from './List';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '../propTypes';
import ListItem from '../list-item';

configure({ adapter: new Adapter() });

describe('<List /> shallow rendering', () => {

    it('should render a ul', () => {
        const wrapper = shallow(
            <ul className="list"></ul>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a id', () => {
        const wrapper = shallow(
            <li id="id"></li>
        );
        expect(wrapper.prop('id')).toEqual('id');
    });

});