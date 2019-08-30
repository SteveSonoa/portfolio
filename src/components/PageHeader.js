import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Features, LinkRenderer, Text } from './';
import { PageTitles, Tags } from '../lib/constants';
import { formatMessage } from '../intl';

export const PageHeader = ({ features, location, slug, title }) => (
    <div className="page-header">
		{location.pathname === '/' ? (
			<>
				<LinkRenderer to={slug} className="no-style"><Text tag={Tags.h2} className='section-title'>{title}</Text></LinkRenderer>
				<Features availableFeatures={features} />
			</>
		) : (
			<>
				<Text tag={Tags.h2} className="no-style section-title">{title}</Text>
				<Features availableFeatures={features} />
				<LinkRenderer to='/'><Text tag={Tags.p}>{formatMessage('components.PageHeader.viewAllSections', 'English')}</Text></LinkRenderer>
			</>
		)}
    </div>
);

PageHeader.propTypes = {
	features: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.object.isRequired,
	slug: PropTypes.string,
	title: PropTypes.oneOf(Object.values(PageTitles)).isRequired
};

PageHeader.defaultProps = {
	features: [],
	slug: '/'
};

export default withRouter(PageHeader);
