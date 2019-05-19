import React from 'react';
import Search from './Search';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<Search /> shallow rendering', () => {

    it('matches the snapshot Search', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a div', () => {
        const wrapper = shallow(
            <div className="search__box">
                <span className="search__text">FIND YOUR MOVIE</span>
                <br/>
                <input className="search__input" type="text" placeholder="SEARCH" onChange={this.changeSearchTxt}/>
                <hr/>
                <div className="search__buttons">
                    <div className="search__buttons-wrapper">
                        <span>SEARCH BY</span>
                        <Button
                            value="TITLE"
                            active={"TITLE" === this.state.filter}
                            onClick={this.changeFilter}
                        />
                        <Button
                            value="GENRE"
                            active={"GENRE" === this.state.filter}
                            onClick={this.changeFilter}
                        />
                    </div>
                    <Button
                        value="SEARCH"
                        active={"SEARCH" === this.state.filter}
                        onClick={this.changeFilter}
                    />
                </div>
                <div className="search__count">
                    <span className="search__count-qty">{this.props.data.length}</span>
                    <span className="search__text">movies found</span>
                </div>
            </div>
        );
        expect(wrapper).toMatchSnapshot();
    });
});