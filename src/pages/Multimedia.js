import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { PageHeader, PlayList } from '../components';

export const Multimedia = () => {
    const options = [
        {
            title: 'Lanyard',
            id: '1QhZW1nwOow',
            description: ['Make your own lanyards.', 'Good luck!']
        },
        {
            title: 'CSS Wizardry',
            id: 'v2Jw9pa6sFo',
            description: ['How I make cool CSS videos', 'This is paragraph 2.']
        },
        {
            title: 'Lanyard',
            id: '1QhZW1nwOow',
            description: ['Make your own lanyards.', 'Good luck!']
        },
        {
            title: 'CSS Wizardry',
            id: 'v2Jw9pa6sFo',
            description: ['How I make cool CSS videos', 'This is paragraph 2.']
        },
        {
            title: 'Lanyard',
            id: '1QhZW1nwOow',
            description: ['Make your own lanyards.', 'Good luck!']
        },
        {
            title: 'CSS Wizardry',
            id: 'v2Jw9pa6sFo',
            description: ['How I make cool CSS videos', 'This is paragraph 2.']
        }
    ];

    return (
        <StyleProvider className="header">
            <PageHeader
                title="Multimedia"
                slug="multimedia"
            />
            <PlayList options={options} />
        </StyleProvider>
    );
};

export default Multimedia;
