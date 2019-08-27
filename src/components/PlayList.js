import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Text, YouTube, YouTubeImage } from './';
import { useStyleState } from '../hooks/styleContext';

const ListItem = ({ active, id, onClick, title }) => (
    <div className={`listitem pointer small-corners ${active ? 'active' : ''}`} onClick={onClick}>
        <YouTubeImage id={id} className='image' />
        <Text tag='p' className='text-bold text'>{title}</Text>
    </div> 
);

const ItemDescription = ({ description }) => (
    <>
        {description.map(desc =>
            <Text tag='p'>{desc}</Text>
        )}
    </>
);

export const PlayList = ({ options }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { style } = useStyleState()

    return (
        <div className={`playlist small-corners ${style}`}>
            <div className='listings'>
                {options.map((option, i) => <ListItem active={currentIndex === i} id={option.id} onClick={() => setCurrentIndex(i)} title={option.title} key={option.id} />)}
            </div>
            <div className="description"><ItemDescription description={options[currentIndex].description} /></div>
            <div className="video"><YouTube id={options[currentIndex].id} autoplay={true} /></div>
        </div>
    );
}

PlayList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.string)
    }))
}

export default PlayList;
