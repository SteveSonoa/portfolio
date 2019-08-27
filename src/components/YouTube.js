import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { YouTubeImage } from './';

export const YouTube = ({ autoplay, id }) => {
    const [loadVideo, setLoadVideo] = useState(false);
    useEffect(() => setLoadVideo(false), [id]);

    return (
        loadVideo ? (
            <div className="youtube-video-container">
                <div className="youtube-inner-container">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=${autoplay ? '1' : '0'}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={id}
                    />
                </div>
            </div>
        ) : (
            <YouTubeImage
                handleClickImage={() => setLoadVideo(true)}
                id={id}
                overlay={true}
            />
        )
    );
};

YouTube.propTypes = {
    autoplay: PropTypes.bool,
    id: PropTypes.string.isRequired
};

YouTube.defaultProps = {
    autoplay: false
};

export default YouTube;
