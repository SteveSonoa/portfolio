import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DropdownContainer, Image, LinkRenderer, SocialMediaButton, Text } from '../components';
import { fetchGiphyImages, resetGiphyStatus } from '../reducers/giphyReducer';
import { dropdownOptions } from '../lib/helpers';

export const Navbar = ({ fetchGiphyImages, giphy, resetGiphyStatus }) => {
    return (
        <div className='navbar'>
            <div className='info'>
                <Image src='/logo.png' alt="FullStackSteve.com" />
                <Text tag='h3' className="name">Steve Marshall <i className="fas fa-code-branch" /> Web Developer</Text>
            </div>
            <div className='selector'>
                {giphy.loading && <span className='loading'><i className="fas fa-sync-alt" /></span>}
                {giphy.success && <span className='success pointer' onClick={resetGiphyStatus} />}
                {giphy.error && <span className='error pointer' onClick={resetGiphyStatus} />}
                <DropdownContainer
                    title='Update The Technology Section'
                    options={dropdownOptions}
                    action={fetchGiphyImages}
                />
            </div>
            <div className='menu-items'>
                <div className='top'>
                    <ul>
                        <li><LinkRenderer to='/projects'>Projects</LinkRenderer></li>
                        <li><LinkRenderer to='/games'>Games</LinkRenderer></li>
                        <li><LinkRenderer to='/multimedia'>Multimedia</LinkRenderer></li>
                        <li><LinkRenderer to='/technology'>Technology</LinkRenderer></li>
                        <li><LinkRenderer to='/SteveMarshall-Resume.pdf'>Resume (PDF)</LinkRenderer></li>
                    </ul>
                </div>
                <div className='bottom'>
                    <SocialMediaButton site='github' />
                    <SocialMediaButton site='stackoverflow' />
                    <SocialMediaButton site='linkedin' />
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    fetchGiphyImages: PropTypes.func.isRequired,
    giphy: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.string),
        error: PropTypes.bool,
        success: PropTypes.bool,
        errorDetail: PropTypes.string
    }).isRequired,
    resetGiphyStatus: PropTypes.func.isRequired
};

const mapStateToProps = ({ giphy }) => ({
	giphy
});

export default connect(mapStateToProps, { fetchGiphyImages, resetGiphyStatus })(Navbar);
