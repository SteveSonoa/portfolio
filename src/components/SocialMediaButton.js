import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LinkRenderer, Text } from '.';

export const SocialMediaButton = ({ site }) => {
    const [isNameDisplayed, setIsNameDisplayed] = useState(false);

    return (
        <div className={`social-media-button pointer ${isNameDisplayed ? 'show-name' : ''}`} onMouseEnter={() => setIsNameDisplayed(true)} onMouseLeave={() => setIsNameDisplayed(false)}>
            <i className="fab fa-github" />
            <div className="name">GITHUB</div>


            {/* <button className="icon-button"><i className="fab fa-github" /></button> */}
            {/* <div className={`name-button ${isNameDisplayed ? 'show-name' : ''}`}>It'll be fun...</div> */}
        </div>
    );
};

SocialMediaButton.propTypes = {
    site: PropTypes.oneOf(['github', 'stackoverflow', 'linkedin']).isRequired
};

export default SocialMediaButton;
