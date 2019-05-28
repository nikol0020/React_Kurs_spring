import React from 'react';
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
    value: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func
};


export default Button;
