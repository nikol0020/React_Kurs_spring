import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header /> shallow rendering', () => {
    it('matches the snapshot Header', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
      it('matches the snapshot', () => {
        const tree = shallow(<Header />);
        expect(toJSON(tree)).toMatchSnapshot();
    });
});

describe('<Header />', () => {

    it('should render a div', () => {
        const wrapper = shallow(
            <div className="header">
                <div className="header__panel">
                    <Search data={props}/>
                    <Sort data={props}/>
                </div>
                <div className="header__panel-plus"></div>
            </div>
        );
        expect(wrapper).toMatchSnapshot();
    });

    // it('renders an `.header`', () => {
    //     const wrapper = shallow(<Header />);
    //     expect(wrapper.find('.header')).to.have.lengthOf(1);
    // });
    //
    // it('renders an `.header__panel`', () => {
    //     const wrapper = shallow(<Header />);
    //     expect(wrapper.find('.header__panel')).to.have.lengthOf(1);
    // });

    // it('renders children when passed in', () => {
    //     const wrapper = shallow((
    //         <div className="header">
    //             <div className="header__panel">
    //                 <Search data={props}/>
    //                 <Sort data={props}/>
    //             </div>
    //             <div className="header__panel-plus"></div>
    //         </div>
    //     ));
    //     expect(wrapper.contains(<div className="header" />)).to.equel(true);
    // });
});