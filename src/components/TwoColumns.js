import React from 'react';
import PropTypes from 'prop-types';

export const TwoColumns = ({ left, right }) => (
    <div className="two-columns">
        <div className="left-column">{left}</div>
        <div className="right-column">{right}</div>
    </div>
);

TwoColumns.propTypes = {
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired
};

export default TwoColumns;
