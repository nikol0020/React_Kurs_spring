import React from 'react';
import './Header.scss';
import Search from '../search';
import Sort from '../sort';
import '../propTypes';

const Header = () => {

    return (
        <div className="header">
            <div className="header__panel">
                <Search/>
                <Sort/>
            </div>
            <div className="header__panel-plus"></div>
        </div>
    );
};

export default Header;

