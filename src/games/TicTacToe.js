import React, { Component } from 'react';
import './TicTacToe.css';

const Player = {
    None: 0,
    One: 1,
    Two: 2
};

const ONGOING_GAME = -1;

export class TicTacToe extends Component {
	initialState = {
        board: [
            Player.None,
            Player.None,
            Player.None,
            Player.None,
            Player.None,
            Player.None,
            Player.None,
            Player.None,
            Player.None
        ],
        nextPlayerTurn: Player.One,
        gameIsWon: ONGOING_GAME,
        winningCells: []
    }

    state = this.initialState;

    checkIfGameIsOver = board => {
        if (board[0] === board[1] && board[1] === board[2] && board[2] !== Player.None) {
            this.setState({
                winningCells: [0, 1, 2]
            });
            return board[0];
        } else if (board[3] === board[4] && board[4] === board[5] && board[5] !== Player.None) {
            this.setState({
                winningCells: [3, 4, 5]
            });
            return board[3];
        } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== Player.None) {
            this.setState({
                winningCells: [6, 7, 8]
            });
            return board[6];
        } else if (board[0] === board[3] && board[3] === board[6] && board[6] !== Player.None) {
            this.setState({
                winningCells: [0, 3, 6]
            });
            return board[0];
        } else if (board[1] === board[4] && board[4] === board[7] && board[7] !== Player.None) {
            this.setState({
                winningCells: [1, 4, 7]
            });
            return board[1];
        } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== Player.None) {
            this.setState({
                winningCells: [2, 5, 8]
            });
            return board[2];
        } else if (board[0] === board[4] && board[4] === board[8] && board[8] !== Player.None) {
            this.setState({
                winningCells: [0, 4, 8]
            });
            return board[0];
        } else if (board[2] === board[4] && board[4] === board[6] && board[6] !== Player.None) {
            this.setState({
                winningCells: [2, 4, 6]
            });
            return board[2];
        }

        let gameOver = true;

        for (const player of board) {
            if (player === Player.None) {
                gameOver = false;
            }
        }

        return gameOver ? Player.None : ONGOING_GAME;
    }

    createOnClickHandler = index => () => {
        const { board, nextPlayerTurn, gameIsWon } = this.state;

        if (board[index] !== Player.None || gameIsWon !== ONGOING_GAME) {
            return;
        }

        const newBoard = board.slice();

        newBoard[index] = nextPlayerTurn;

        const newGameIsWon = this.checkIfGameIsOver(newBoard);

        this.setState({
            board: newBoard,
            nextPlayerTurn: 3 - nextPlayerTurn,
            gameIsWon: newGameIsWon
        });
    }

    renderCell = index => {
        const { board, winningCells } = this.state;

        return (
            <div
                className="cell"
                onClick={this.createOnClickHandler(index)}
                data-player={board[index]}
            >
                <div className={`player-marker ${winningCells.includes(index) ? 'winner' : ''}`}>{board[index] === Player.One ? <i className="fas fa-times" /> : board[index] === Player.Two ? <i className="far fa-circle" /> : ''}</div>
            </div>
        );
    }

    renderStatus = () => {
        const { gameIsWon } = this.state;
        const gameOverText = gameIsWon === Player.None ? 'The game is a draw!' : `Player ${gameIsWon} wins!`
        return (<div className="game-status">
            {gameIsWon === ONGOING_GAME ? `Let's Play!` : gameOverText}<br />
            {gameIsWon !== ONGOING_GAME && <button onClick={this.resetGame()}>New Game</button>}
        </div>)
    }

    renderBoard = () => {
        const { board } = this.state;
        return (
            <div className="board-container">
                {board.map((value, key) => this.renderCell(key))}
            </div>
        );
    }

    resetGame = () => () => {
        this.setState(this.initialState);
    }

    render() {
        return (
            <div className="ttt-container">
                {this.renderStatus()}
                {this.renderBoard()}
            </div>
        );
    }
}

export default TicTacToe;
