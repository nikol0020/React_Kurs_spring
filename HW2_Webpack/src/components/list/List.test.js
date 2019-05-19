import React from 'react';
import List from './List';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<List /> shallow rendering', () => {

    it('matches the snapshot List', () => {
        const wrapper = shallow(<List />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a ul', () => {
        const wrapper = shallow(
            <ul className="list"></ul>
        );
        expect(wrapper).toMatchSnapshot();
    });

    // it('renders an `.list`', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.list')).to.have.lengthOf(1);
    // });
});