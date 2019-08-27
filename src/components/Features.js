import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './';
import { useStyleState } from '../hooks/styleContext';


export const Features = ({ availableFeatures }) => {
    const { style } = useStyleState()

    let text = '';
    switch(availableFeatures.length) {
        case 1:
            text = availableFeatures[0];
            break;
        case 2:
            text = `${availableFeatures[0]} and ${availableFeatures[0]}`
            break;
        default: 
            const newArray = [...availableFeatures];
            const lastText = `and ${newArray.pop()}`;
            text = `${newArray.join(', ')}, ${lastText}`;
    }
    return (
        <Text tag='p' className={`features small ${style}`}>This section includes {text}.</Text>
    )
};

Features.propTypes = {
    availableFeatures: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Features;
