import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, PlayList } from '../components';
import { AvailableFeatures } from '../lib/constants';
import { multimediaVideoOptions as options } from '../lib/helpers';

export const Multimedia = () => {
    const { react, hooks, css, context, grid, adobe } = AvailableFeatures;
    const features = [react, css, hooks, context, grid, adobe.premiere, adobe.ps, adobe.aud];

    return (
        <StyleProvider className="header">
            <PageHeader
                title="Multimedia"
                slug="multimedia"
                features={features}
            />
            <PlayList options={options} />
        </StyleProvider>
    );
};

export default Multimedia;
