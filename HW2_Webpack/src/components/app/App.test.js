import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';

configure({ adapter: new Adapter() });

// describe('Addition', () => {
//     it('knows that 2 and 5 make 7', () => {
//         expect(2 + 5).toBe(7);
//     });
// });

describe('<App /> shallow rendering', () => {

    it('<h1>React Todo App!!!</h1>', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1').text()).toBe('React Todo App!!!');
    });
    it('<Header>React Todo App!!!</Header>', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').text(data={dumbData})).toBe(data={dumbData});
    });
    it('<List />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('List').text(data={dumbData})).toBe(data={dumbData});
    });
    it('should render a div', () => {
        const wrapper = shallow(
            <div className="app">
                <ErrorBoundary>
                    <h1>React Todo App!!!</h1>
                    <Header data={dumbData} filteredItems={this.props.setFilteredData}/>
                    <List data={dumbData}/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('matches the snapshot App', () => {
        const tree = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
