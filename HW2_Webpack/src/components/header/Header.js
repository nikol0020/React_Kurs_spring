import React, {Component} from 'react';
import './Header.scss';
import Search from '../search';
import Sort from '../sort';
import CountSearch from '../count-search';
import Button from '../button';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Search/>
                <div className="header__panel">
                    <CountSearch/>
                    <Sort/>
                </div>
            </div>
        );
    }
}

