import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, Text } from '../components';

export const Projects = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Projects"
            slug="projects"
        />
        <Text tag='h3'>Tic-Tac-Toe</Text>
    </StyleProvider>
);

export default Projects;
