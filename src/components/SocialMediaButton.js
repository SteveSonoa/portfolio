import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Button } from './';
import { openLinkInNewTab } from '../lib/helpers';

export const SocialMediaButton = ({ site }) => {
    let icon, link, text;
    switch (site) {
        case 'github':
            icon = 'fab fa-github';
            link = 'https://github.com/stevesonoa';
            text = 'GitHub';
            break;
        case 'stackoverflow':
            icon = 'fab fa-stack-overflow';
            link = 'https://stackoverflow.com/users/8578075/steve';
            text = 'Stack Overflow';
            break;
        case 'linkedin':
            icon = 'fab fa-linkedin-in';
            link = 'https://www.linkedin.com/in/sonoa/';
            text = 'LinkedIn';
            break;
        default:
            icon = 'fas fa-home';
            link = 'http://www.fullstacksteve.com/';
            text = 'FullStackSteve';
    }

    return (
        <Button className={`social-media-button ${site}`} onClick={() => openLinkInNewTab(link)}>
            <i className={`icon ${icon}`} />
            <div className="name">{text}</div>
        </Button>
    );
};

SocialMediaButton.propTypes = {
    site: PropTypes.oneOf(['github', 'stackoverflow', 'linkedin']).isRequired
};

export default withRouter(SocialMediaButton);
