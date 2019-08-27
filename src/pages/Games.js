import React, { useState } from 'react';

import StyleProvider, { useStyleState } from '../hooks/styleContext';
import { LinkRenderer, PageHeader, Text } from '../components';
import { AvailableFeatures } from '../lib/constants';
import TicTacToe from '../games/TicTacToe';
import GamesFocus from '../games/focus/view/GamesFocus';

const GameLayout = ({ title, Component, description, gitHubLink }) => {
    const [active, setActive] = useState(false);
    const { style } = useStyleState()

    return (
        <div className={`game-layout small-corners ${active ? 'active' : ''} ${style}`}>
            <div className='game-header pointer' onClick={() => setActive(!active)}>
                <Text tag='h3'>{active ? <i className="fas fa-angle-double-up" /> : <i className="fas fa-angle-double-down" />} {title}</Text>
            </div>
            <div className="game-example">
                <Component />
            </div>
            <div className="game-description">
                {description.map((desc, i) => <Text tag='p' key={i}>{desc}</Text>)}                
                <LinkRenderer to={`https://github.com/SteveSonoa/${gitHubLink}`}>View this project on GitHub</LinkRenderer>
            </div>
        </div>
    );
}

export const Games = () => {
    const { react, typescript, css, flex, timer, md, adobe } = AvailableFeatures;
    const features = [react, typescript, css, flex, timer, md, adobe.ps];

    const gamesInfo = [
        {
            title: 'TypeScript Tic-Tac-Toe',
            Component: TicTacToe,
            description: ['Tic-Tac-Toe was created in TypeScript and React.'],
            gitHubLink: 'typescript-demo'
        },
        {
            title: 'Focus',
            Component: GamesFocus,
            description: ['Focus was created in React. It uses state management for the timer (among other variables). Most of the effects you will see are powered by CSS, not React, JavaScript, or HTML.'],
            gitHubLink: 'focus'
        }
    ];

    return (
        <StyleProvider className="header">
            <PageHeader
                title="Games"
                slug="games"
                features={features}
            />
            {gamesInfo.map(game => <GameLayout {...game} key={game.title} />)}
        </StyleProvider>
    );
};

export default Games;
