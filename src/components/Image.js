import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './';

export const Image = ({ alt, className, src, text, title }) => (
    <div className="image-container">
        <img src={src} className={className} alt={alt} />
        {text && (
            <div className="image-text">
                {title && <Text tag='h3'>{title}</Text>}
                <Text tag='p'>{text}</Text>
            </div>
        )}
    </div>
);

Image.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
    title: PropTypes.string
};

Image.defaultProps = {
    alt: "Steve Marshall's Portfolio",
    className: '',
    text: null,
    title: null
};

export default Image;
