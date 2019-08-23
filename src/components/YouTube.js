import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './YouTube.css';

export const YouTube = ({ id }) => {
    const [loadVideo, setLoadVideo] = useState(false);

    return (
        loadVideo ? (
            <div className="youtube-video-container">
                <div className="youtube-inner-container">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={id}
                    />
                </div>
            </div>
        ) : (
            <div className="youtube-image-container">
                <img
                    src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                    alt="YouTube Video"
                    className="youtube-image"
                />
                <img
                    src="/img/youtube-video-overlay.jpg"
                    alt="YouTube Video"
                    className="youtube-cover-image"
                    onClick={() => setLoadVideo(true)}
                />
            </div>
        )
    );
};

YouTube.propTypes = {
    id: PropTypes.string.isRequired
};

export default YouTube;
