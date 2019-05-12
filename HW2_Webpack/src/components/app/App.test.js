import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

//const wrapper = shallow(<Foo />);


configure({ adapter: new Adapter() });

describe('Addition', () => {
    it('knows that 2 and 5 make 7', () => {
        expect(2 + 5).toBe(7);
    });
});

describe('<App /> shallow rendering', () => {
    it('should render App', () => {
        const wrapper = shallow(<App />);
    });
    it('<h1>React Todo App!!!</h1>', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1').text()).toBe('React Todo App!!!');
    });
    // it('matches the snapshot', () => {
    //     const tree = shallow(<App />);
    //     expect(toJSON(tree)).toMatchSnapshot();
    // });
});
