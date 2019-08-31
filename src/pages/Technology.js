import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AvailableFeatures } from '../lib/constants';
import StyleProvider from '../hooks/styleContext';
import  { Image, LoadingStatus, PageHeader } from '../components';

export const Technology = ({ giphy }) => {
    const { react, css, flex, axios, api, redux, saga } = AvailableFeatures;
    const features = [react, api, axios, redux, saga, css, flex];

    return (
        <StyleProvider className="header">
            <PageHeader
                title="Technology"
                slug="technology"
                features={features}
            />
            {giphy.loading || giphy.error ? <LoadingStatus {...giphy} /> : (
                <div className='technology-images'>
                    {giphy.data.map(g => <Image src={g} alt='Giphy' />)}
                </div>
            )}
        </StyleProvider>

    );
}

Technology.propTypes = {
    giphy: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.string).isRequired,
        error: PropTypes.bool.isRequired,
        errorDetail: PropTypes.string,
        loading: PropTypes.bool.isRequired,
        success: PropTypes.bool.isRequired
    })
};

const mapStateToProps = ({ giphy }) => ({
    giphy
});

export default connect(mapStateToProps)(Technology);
