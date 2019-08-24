import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, Text } from '../components';

export const Testing = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Testing"
            slug="testing"
        />
    </StyleProvider>
);

export default Testing;
