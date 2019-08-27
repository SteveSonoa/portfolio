import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader } from '../components';
import { AvailableFeatures } from '../lib/constants';

export const Testing = () => {
    const { testing, enzyme, jest, mocha } = AvailableFeatures;
    const features = [testing, enzyme, jest, mocha];

    return (
        <StyleProvider className="header">
            <PageHeader
                title="Testing"
                slug="testing"
                features={features}
            />
        </StyleProvider>
    );
};

export default Testing;
