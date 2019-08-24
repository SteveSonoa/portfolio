import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, Text } from '../components';

export const Projects = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Projects"
            slug="projects"
        />
    </StyleProvider>
);

export default Projects;
