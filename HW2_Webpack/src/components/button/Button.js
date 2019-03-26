import React from 'react';
import './Button.scss';

import PropTypes from 'prop-types';

const Button = ({value, active, onClick}) => (
    <input
        type="button"
        className={active ? 'button button--active' : 'button'}
        value={value}
        onClick={onClick}
    />
);

Button.propTypes = {
    value: PropTypes.string,
    active: PropTypes.boolean,
    onClick: PropTypes.func
};


export default Button;
