import React from 'react';
import Search from './Search';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<Search /> shallow rendering', () => {

    it('should render a div', () => {
        const wrapper = shallow(
            <div className="search__box"></div>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('<span>FIND YOUR MOVIE</span>', () => {
        const wrapper = shallow(
            <span className="search__text">FIND YOUR MOVIE</span>
        );
        expect(wrapper.find('span').text()).toBe('FIND YOUR MOVIE');
    });

});


describe('when click buttonGenre', () => {
    const valueFilter = 'TITLE';
    const wrapper = shallow(<Search />);

    beforeEach(() => {
        wrapper.find('#buttonTitle').simulate('click', {
            target: {
                value: valueFilter
            },
        });
    });

    it('updates filter field in state', () => {
        expect(wrapper.state().filter).toEqual(valueFilter)
    })
});

describe('when click buttonGenre', () => {
    const valueFilter = 'GENRE';
    const wrapper = shallow(<Search />);

    beforeEach(() => {
        wrapper.find('#buttonGenre').simulate('click', {
            target: {
                value: valueFilter
            },
        });
    });

    it('updates filter field in state', () => {
        expect(wrapper.state().filter).toEqual(valueFilter)
    })
});
