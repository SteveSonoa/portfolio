import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const LinkRenderer = ({ children, className, to }) => {
    if (to.includes('http://') || to.includes('https://') || to.includes('.pdf')) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" className={`external-link ${className}`}>
                {children}
            </a>
        );
    }

    return <Link to={to} className={className}>{children}</Link>;
};

LinkRenderer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string.isRequired
};

LinkRenderer.defaultProps = {
    className: ''
};

export default withRouter(LinkRenderer);
