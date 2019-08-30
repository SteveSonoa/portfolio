import React from 'react';
import PropTypes from 'prop-types';

import { LinkRenderer, Text, YouTube } from '../components';

const Responsibilities = ({ text, tech }) => (
    <>
        <dt>{text}</dt>
        {tech.map(t => (<dd>{t}</dd>))}
    </>
)

export const TwoColumns = ({ title, summary, responsibilities, url, videoId }) => (
    <div className="two-columns">
        <div className="left-column">
            <Text tag='h2'><LinkRenderer to={url}>{title}</LinkRenderer></Text>
            <Text tag='p'>{summary}</Text>
            <dl>
                {responsibilities.map(r => <Responsibilities text={r.text} tech={r.tech} />)}
            </dl>
        </div>
        <div className="right-column"><YouTube id={videoId} autoplay /></div>
    </div>
);

TwoColumns.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        tech: PropTypes.arrayOf(PropTypes.string)
    })).isRequired,
    url: PropTypes.string,
    videoId: PropTypes.string.isRequired
};

TwoColumns.defaultProps = {
    url: '#'
};

export default TwoColumns;
