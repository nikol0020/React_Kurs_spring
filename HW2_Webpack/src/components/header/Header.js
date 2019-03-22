import React, {Component} from 'react';
import './Header.scss';
import Search from '../search';
import Button from '../button';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div  className="header__block-common">
                    <span className="header__text">FIND YOUR MOVIE</span>
                    <br/>
                    <Search/>
                    <hr/>
                    <div className="header__buttons">
                        <div className="header__buttons-wraper">
                            <span>SEARCH BY</span>
                            <Button/>
                            <Button/>
                        </div>
                        <Button/>
                    </div>
                </div>
            </div>
        );
    }
}

