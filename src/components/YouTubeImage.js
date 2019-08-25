import React from 'react';
import PropTypes from 'prop-types';

export const YouTubeImage = ({ className, id, handleClickImage, overlay }) => {
    return (
        <div className={`youtube-image-container ${className || ''}`}>
            <img
                src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                alt="YouTube Video"
                className="youtube-image"
            />
            {overlay && (
                <img
                    src="/img/youtube-video-overlay.jpg"
                    alt="YouTube Video"
                    className="youtube-cover-image"
                    onClick={handleClickImage}
                />
            )}
        </div>
    );
};

YouTubeImage.propTypes = {
    className: PropTypes.string,
    handleClickImage: PropTypes.func,
    id: PropTypes.string.isRequired,
    overlay: PropTypes.bool
};

YouTubeImage.defaultProps = {
    className: '',
    handleClickImage: () => null,
    overlay: false
};

export default YouTubeImage;
