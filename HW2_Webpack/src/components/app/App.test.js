import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

describe('App Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<App />).find('div.app').exists()).toBe(true)
    });

    it('<h1>React Todo App!!!</h1> in <App />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1').text()).toBe('React Todo App!!!');
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

