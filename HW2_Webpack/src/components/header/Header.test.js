import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header /> shallow rendering', () => {
    it('matches the snapshot Header', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render a div', () => {
        const wrapper = shallow(
            <div className="header"></div>
        );
        expect(wrapper).toMatchSnapshot();
    });
    // it('should render Search', () => {
    //     const wrapper = shallow(<Search/>);
    //     expect(wrapper).toMatchSnapshot();
    // });
});
