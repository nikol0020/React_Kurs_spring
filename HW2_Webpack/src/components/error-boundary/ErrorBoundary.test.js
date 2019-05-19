import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<ErrorBoundary /> shallow rendering', () => {

    it('should render ErrorBoundary', () => {
        const wrapper = shallow(<ErrorBoundary />);
    });

    it('should render a h1', () => {
        const wrapper = shallow(
            <h1>Something went wrong.</h1>
        );
        expect(wrapper).toMatchSnapshot();
    });
});