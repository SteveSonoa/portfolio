import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './';

export const LoadingStatus = ({ error, errorDetail }) => {
    const icon = error ? 'fas fa-exclamation-triangle' : 'fas fa-circle-notch fa-spin';
    const message = errorDetail || 'Loading...';

    return (
        <div className='loading-status'>
            <i className={`loading-icon ${icon}`} />
            <Text tag='h2' className='loading-message'>{message}</Text>
        </div>
    );
}

LoadingStatus.propTypes = {
    error: PropTypes.bool,
    errorDetail: PropTypes.string
};

LoadingStatus.defaultProps = {
    error: false,
    errorDetail: ''
};

export default LoadingStatus;
