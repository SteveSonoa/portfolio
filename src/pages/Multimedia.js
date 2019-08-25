import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, Text, YouTube } from '../components';

export const Multimedia = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Multimedia"
            slug="multimedia"
        />
        <YouTube id='1QhZW1nwOow' />

    </StyleProvider>
);

export default Multimedia;
