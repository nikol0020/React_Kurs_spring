import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header /> shallow rendering', () => {
    it('matches the snapshot Header', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    });
});
