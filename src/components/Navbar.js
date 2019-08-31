import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DropdownContainer, Image, SocialMediaButton, Text } from '../components';
import { fetchGiphyImages } from '../reducers/giphyReducer';

export const Navbar = ({ fetchGiphyImages }) => {
    return (
        <div className='navbar'>
            <div className='info'>
                <Image src='/logo.png' alt="FullStackSteve.com" />
                <Text tag='h3' className="name">Steve Marshall <i className="fas fa-code-branch" /> Web Developer</Text>
            </div>
            <div className='selector'>
                <DropdownContainer
                    title='Personalize Your Experience'
                    options={[
                        { name: 'Cats', value: 'cat kitten lion' },
                        { name: 'Marvel', value: 'marvel mcu ironman hulk' },
                        { name: 'Star Wars', value: 'starwars yoda darth kenobi xwing' },
                        { name: 'Disney', value: 'disney disneyland mickey pluto donald' }
                    ]}
                    action={fetchGiphyImages}
                />

            </div>
            <div className='menu-items'>
                <div className='top'>
                    <ul>
                        <li>Projects</li>
                        <li>Games</li>
                        <li>Multimedia</li>
                        <li>Resume (PDF)</li>
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
    fetchGiphyImages: PropTypes.func.isRequired
};

const mapStateToProps = ({ giphy }) => ({
	giphy
});

export default connect(mapStateToProps, { fetchGiphyImages })(Navbar);
