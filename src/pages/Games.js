import React from 'react';

import StyleProvider from '../hooks/styleContext';
import { LinkRenderer, PageHeader, Text } from '../components';
import TicTacToe from '../games/TicTacToe';

export const Games = () => (
    <StyleProvider className="header">
        <PageHeader
            title="Games"
            slug="games"
        />
        <div className="game-layout">
            <div className="game-header">
                <Text tag='h3'>TypeScript Tic-Tac-Toe</Text>
            </div>
            <div className="game-example">
                <TicTacToe />
            </div>
            <div className="game-description">
                <Text tag='p'>Tic-Tac-Toe was created in TypeScript and React.</Text>
                <LinkRenderer to='https://github.com/SteveSonoa/typescript-demo'>View this project on GitHub</LinkRenderer>
            </div>
        </div>
    </StyleProvider>
);

export default Games;
