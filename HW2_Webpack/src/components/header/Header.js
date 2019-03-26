import React from 'react';
import './Header.scss';
import Search from '../search';
import Sort from '../sort';

const Header = (props) => {

    return (
        <div className="header">
            <div className="header__panel">
                <Search data={props}/>
                <Sort data={props}/>
            </div>
            <div className="header__panel-plus"></div>
        </div>
    );
};

export default Header;

