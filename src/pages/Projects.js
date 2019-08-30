import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, TwoColumns } from '../components';
import { AvailableFeatures } from '../lib/constants';

export const Projects = () => {
    const { react, typescript, css, flex, hooks, md, redux, saga, router, api, express, seo, security, mysql, testing, enzyme, jest, mocha } = AvailableFeatures;
    const features = [react, typescript, css, hooks, redux, saga, flex, router, md, api, express, seo, security, mysql, testing, enzyme, jest, mocha];

    return (
        <StyleProvider className="header">
            <PageHeader
                title="Projects"
                slug="projects"
                features={features}
            />
            <TwoColumns
                left={<b>Left</b>}
                right={<strong>Right</strong>}
            />
        </StyleProvider>
    );
};

export default Projects;
