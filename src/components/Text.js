import React from 'react';
import PropTypes from 'prop-types';

const allowedTags = ['h1', 'h2', 'h3', 'p'];

export const Text = ({ children, className, tag }) => {
    const TagName = allowedTags.includes(tag) ? tag : null;

    return TagName ? (
        <TagName className={className}>{children}</TagName>
    ) : null;
};

Text.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    tag: PropTypes.oneOf(allowedTags)
};

Text.defaultProps = {
    className: '',
    tag: 'p'
};

export default Text;