import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, Text } from '../components';

export const Multimedia = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Multimedia"
            slug="multimedia"
        />
    </StyleProvider>
);

export default Multimedia;
