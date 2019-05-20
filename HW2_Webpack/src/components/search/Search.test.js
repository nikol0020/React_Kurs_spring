import React from 'react';
import Search from './Search';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<Search /> shallow rendering', () => {

    it('should render a div', () => {
        const wrapper = shallow(
            <div className="search__box"></div>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
