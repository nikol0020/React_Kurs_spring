import React from 'react';
import ListItem from './ListItem';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

describe('<ListItem /> shallow rendering', () => {

    it('should render div', () => {
        const wrapper = shallow(
            <div className="list-item" ></div>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a list-item__image', () => {
        const wrapper = shallow(
            <img poster_path="poster_path" />
        );
        expect(wrapper.prop('poster_path')).toEqual('poster_path');
    });

    it('should render a list-item__title', () => {
        const wrapper = shallow(
            <h4 title="title" />
        );
        expect(wrapper.prop('title')).toEqual('title');
    });

    it('should render a list-item__year', () => {
        const wrapper = shallow(
            <span release_date="release_date"></span>
        );
        expect(wrapper.prop('release_date')).toEqual('release_date');
    });

});