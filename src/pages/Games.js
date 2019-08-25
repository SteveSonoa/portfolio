import React, { useState } from 'react';

import StyleProvider, { useStyleState } from '../hooks/styleContext';
import { LinkRenderer, PageHeader, Text } from '../components';
import TicTacToe from '../games/TicTacToe';

const GameLayout = ({ title, Component, description, gitHubLink }) => {
    const [active, setActive] = useState(false);
    const { style } = useStyleState()

    return (
        <div className={`game-layout ${active ? 'active' : ''} ${style}`}>
            <div className='game-header pointer' onClick={() => setActive(!active)}>
                <Text tag='h3'>{active ? <i className="fas fa-angle-double-up" /> : <i className="fas fa-angle-double-down" />} {title}</Text>
            </div>
            <div className="game-example">
                <Component />
            </div>
            <div className="game-description">
                <Text tag='p'>{description}</Text>
                <LinkRenderer to={`https://github.com/SteveSonoa/${gitHubLink}`}>View this project on GitHub</LinkRenderer>
            </div>
        </div>
    );
}

export const Games = () => {
    const gamesInfo = [
        {
            title: 'TypeScript Tic-Tac-Toe',
            Component: TicTacToe,
            description: 'Tic-Tac-Toe was created in TypeScript and React.',
            gitHubLink: 'typescript-demo'
        },
        {
            title: 'TypeScript Tic-Tac-Toe 2',
            Component: TicTacToe,
            description: 'Tic-Tac-Toe was created in TypeScript and React.',
            gitHubLink: 'typescript-demo'
        }
    ]

    return (
        <StyleProvider className="header">
            <PageHeader
                title="Games"
                slug="games"
            />
            {gamesInfo.map(game => <GameLayout {...game} key={game.title} />)}
        </StyleProvider>
    );
};

export default Games;
