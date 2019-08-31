export const multimediaVideoOptions = [
    {
        title: 'Plan To Lose Your Kids In Disneyland',
        id: '1QhZW1nwOow',
        description: [
            'This video was created for my RideTheTeacups.com blog platform to help parents plan a Disneyland trip with their young kids.',
            'I produced all content found in this video, including the planning, designing, recording, hosting, editing, graphics, subtitles, music, sound, and cards.'
        ]
    },
    {
        title: 'API Management Part 1: Design an API',
        id: 'o6tnpbFr-Lc',
        description: [
            'This video is part of a series created for an internal Axway hackathon project. The goal was to reinforce that as developers, our output will not always be new code.',
            'I was part of a team of 4 members who came up with the series design. I acted as the team leader, and the writing was split equally among all team members.',
            'My individual contributions included directing, video screen captures, and editing both video and audio.'
        ]
    },
    {
        title: 'API Management Part 2: API Security',
        id: 'tHlBjpKETVM',
        description: [
            'This video is part of a series created for an internal Axway hackathon project. The goal was to reinforce that as developers, our output will not always be new code.',
            'I was part of a team of 4 members who came up with the series design. I acted as the team leader, and the writing was split equally among all team members.',
            'My individual contributions included directing, video screen captures, and editing both video and audio.'
        ]
    },
    {
        title: 'API Management Part 3: Monitoring API Traffic',
        id: 'g-JFZNrHGWk',
        description: [
            'This video is part of a series created for an internal Axway hackathon project. The goal was to reinforce that as developers, our output will not always be new code.',
            'I was part of a team of 4 members who came up with the series design. I acted as the team leader, and the writing was split equally among all team members.',
            'My individual contributions included directing, video screen captures, and editing both video and audio.'
        ]
    },
    {
        title: 'API Management Part 4: Exposing APIs Publicly',
        id: 'K5UHXSVVUv0',
        description: [
            'This video is part of a series created for an internal Axway hackathon project. The goal was to reinforce that as developers, our output will not always be new code.',
            'I was part of a team of 4 members who came up with the series design. I acted as the team leader, and the writing was split equally among all team members.',
            'My individual contributions included directing, video screen captures, and editing both video and audio.'
        ]
    }
];

export const openLinkInNewTab = url => {
    const win = window.open(url, '_blank');
    win.focus();
}

export const projects = [
    {
        title: 'AMPLIFY Central (Axway)',
        summary: "Axway's premiere API Management PaaS solution for API management, security, and monitoring across on-premise, cloud-based, and hybrid API architectures.",
        responsibilities: [
            {
                text: 'Design and implement a public API Catalog list',
                tech: ['Swagger', 'Promises & Data Management', 'UX', 'React & React-Router', 'Flexbox']
            },
            {
                text: 'Implement client-side JWT authentication',
                tech: ['JWT', 'Base64 Encryption', 'Full CRUD Implementation', 'React & Hooks', 'Redux & Redux-Sagas', 'Bootstrap Grid Layout']
            }
        ],
        url: 'https://apicentral.axway.com/',
        videoId: 'E_dngD0PEI4'
    },
    {
        title: 'Ride The Teacups',
        summary: 'A travel planning guide for parents who want to bring their young children to Disneyland.',
        responsibilities: [
            {
                text: 'Design the project architecture and setup the primary tools',
                tech: ['Express Server', 'MySQL & Sequelize', 'Express Helmet Security', 'Passport & bcrypt', 'React Helmet SEO', 'React & React-Router', 'Redux & Redux-Sagas', 'Axios']
            },
            {
                text: 'Handle server-side JWT authentication',
                tech: ['JWT', 'Passport & bcrypt', 'httpsOnly Cookie Management']
            },
            {
                text: 'Create a complete blog platform without using a library',
                tech: ['Full CRUD Implementation', 'UX', 'API-based Pagination', 'Flexbox (for posts)', 'CSS Grid (for lists)', 'User Authentication', 'Permissions Management']
            }
        ],
        url: 'https://www.ridetheteacups.com/',
        videoId: 'ncAJR28ARtc'
    }
];
