import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, Text } from '../components';

export const Testing = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Testing"
            slug="testing"
        />
        <Text tag='h3'>Tic-Tac-Toe</Text>
    </StyleProvider>
);

export default Testing;
