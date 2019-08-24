import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { LinkRenderer, Text } from './';
import { PageTitles, Tags } from '../lib/constants';
import { formatMessage } from '../intl';

export const PageHeader = ({ location, title }) => (
    <div className="page-header">
        {location.pathname !== '/' && (<LinkRenderer to='/'>{formatMessage('components.PageHeader.viewAllSections', 'English')}</LinkRenderer>)}
        
        <Text tag={Tags.h2}>{title}</Text>
    </div>
);

PageHeader.propTypes = {
    location: PropTypes.object.isRequired,
    title: PropTypes.oneOf([Object.values(PageTitles)]).isRequired
};

export default withRouter(PageHeader);
