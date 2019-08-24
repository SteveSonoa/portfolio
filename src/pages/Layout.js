import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, Text } from '../components';

export const Layout = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Layout"
            slug="layout"
        />
        <Text tag='h3'>Tic-Tac-Toe</Text>
    </StyleProvider>
);

export default Layout;
