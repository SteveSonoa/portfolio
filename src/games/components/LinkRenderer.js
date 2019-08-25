import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkRenderer = ({ children, href }) => {
	if (href.match(/^(https?:)?\/\//)) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer">
				{children} <sup>☁</sup>
			</a>
		);
	}

	return <Link to={href}>{children}</Link>;
};

LinkRenderer.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired
};

export default LinkRenderer;
