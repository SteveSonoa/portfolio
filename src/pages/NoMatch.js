import React from 'react';
import { Link } from 'react-router-dom';

import StyleProvider from '../hooks/styleContext';
import { Features, Text } from '../components';
import { AvailableFeatures } from '../lib/constants';

export const NoMatch = () => {
    const { react, css, flex, router } = AvailableFeatures;
    const features = [react, router, css, flex];

    return (
        <StyleProvider className="text">
            <Text tag='h1'>Well This Is Awkward...</Text>
            <Features availableFeatures={features} />
            <Text tag='p'>We can't seem to find the page you're looking for.</Text>
            <Link to='/'>Try Again</Link>
        </StyleProvider>
    );
};

export default NoMatch;
