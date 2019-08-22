import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ className, inactive, onClick, children }) => (
    <button className={`${className} ${inactive ? 'inactive' : ''}`} onClick={onClick}>{children}</button>
);

Button.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    inactive: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    className: '',
    inactive: false
};

export default Button;
