import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({ alt, className, src }) => (
    <img src={src} className={className} alt={alt} />
);

Image.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string.isRequired
};

Image.defaultProps = {
    alt: "Steve Marshall's Portfolio",
    className: ''
};

export default Image;
