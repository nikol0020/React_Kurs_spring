import React, {Component} from 'react';
import './Header.scss';
import Search from '../search';
import Sort from '../sort';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {data: this.props.data };
    }

    render() {
        return (
            <div className="header">
                <div className="header__panel">
                    <Search data={this.state}/>
                    <Sort  data={this.state}/>
                </div>
                <div className="header__panel-plus"></div>
            </div>
        );
    }
}

