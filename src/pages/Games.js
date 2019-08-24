import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, Text } from '../components';

export const Games = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Games"
            slug="games"
        />
        <Text tag='h3'>Tic-Tac-Toe</Text>
    </StyleProvider>
);

export default Games;
