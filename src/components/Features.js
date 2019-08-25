import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './';

export const Features = ({ availableFeatures }) => {
    let text = '';
    switch(availableFeatures.length) {
        case 1:
            text = availableFeatures[0];
            break;
        case 2:
            text = `${availableFeatures[0]} and ${availableFeatures[0]}`
            break;
        default: 
            const lastText = `and ${availableFeatures.pop()}`;
            text = `${availableFeatures.join(', ')}, ${lastText}`;
    }
    return (
        <Text tag='p' className='features small'>This section includes {text}.</Text>
    )
};

Features.propTypes = {
    availableFeatures: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Features;
