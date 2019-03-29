import React from 'react';
import './Header.scss';
import Search from '../search';
import Sort from '../sort';
import { movieShape } from '../propTypes';
import PropTypes from 'prop-types';

const Header = (props) => {

    return (
        <div className="header">
            <div className="header__panel">
                <Search data={props.data}/>
                <Sort data={props.data}/>
            </div>
            <div className="header__panel-plus"></div>
        </div>
    );
};


Header.propTypes = {
    data: PropTypes.arrayOf( movieShape )
};

export default Header;

