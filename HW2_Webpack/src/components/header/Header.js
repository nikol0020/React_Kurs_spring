import React, {Component} from 'react';
import './Header.scss';
import Search from '../search';
import Button from '../button';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Search/>
                <br/>
                <div className="header__buttons">
                    <div className="header__buttons-wraper">
                        <span>Search by</span>
                        <Button/>
                        <Button/>
                    </div>
                    <Button/>
                </div>
            </div>
        );
    }
}

