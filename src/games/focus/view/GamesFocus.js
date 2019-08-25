import React, { Component, Fragment } from 'react';

import { HowToPlay } from '../../components';
import images from '../images';
import bonusPoints from '../bonusPoints';
import { guidePages } from '../guide/pages';

import cameraTop from '../media/icons/cameraTop.svg';
import cameraBottom from '../media/icons/cameraBottom.svg';
import cameraLeft from '../media/icons/cameraLeft.svg';
import cameraRight from '../media/icons/cameraRight.svg';
import cameraCenter from '../media/icons/cameraCenter.svg';
import './GamesFocus.css';

export class GamesFocus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playedOnce: false,
			backgrounds: [],
			characters: [],
			currentRound: 0,
			playing: false,
			characterBlur: 100,
			characterGray: 100,
			backgroundBlur: 0,
			transition: '0s',
			timer: 30,
			paused: false,
			correctAnswers: 0,
			score: 0,
			consecutiveAnswers: 0,
			top: 0,
			left: 0,
			awardedPoints: null,
			whiteFlashOpacity: 0,
			whiteFlashTransition: '0s'
		};
		this.gameDiv = React.createRef();
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	resetGame = () => {
		const availableBackgrounds = [...images.backgrounds];
		const backgrounds = [];
		for (let i = 0; i < 5; i++) {
			backgrounds.push(
				availableBackgrounds.splice(this.rng(availableBackgrounds.length), 1)[0]
			);
		}

		const availableCharacters = [...images.characters];
		const characters = [];
		for (let i = 0; i < 5; i++) {
			const thisCharacter = {
				...availableCharacters.splice(this.rng(availableCharacters.length), 1)[0],
				options: []
			};

			const options = [];
			const charactersLeft = [...availableCharacters];
			for (let j = 0; j < 3; j++) {
				options.push(charactersLeft.splice(this.rng(charactersLeft.length), 1)[0].name);
			}
			options.splice(Math.floor(Math.random() * 3), 0, thisCharacter.name);
			thisCharacter.options = options;

			characters.push(thisCharacter);
		}

		this.setState({
			playedOnce: true,
			backgrounds,
			characters,
			currentRound: 0,
			playing: true,
			characterBlur: 100,
			characterGray: 100,
			backgroundBlur: 0,
			timer: 30,
			paused: false,
			correctAnswers: 0,
			score: 0,
			consecutiveAnswers: 0,
			awardedPoints: null,
			whiteFlashTransition: '0s'
		});

		const intervalId = setInterval(this.monitorRound, 500);
		this.setState({ intervalId });
	};

	rng = max => {
		return Math.floor(Math.random() * max);
	};

	nextRound = () => {
		if (this.state.currentRound >= 4) {
			this.setState({
				currentRound: 0,
				playing: false,
				awardedPoints: null
			});
		} else {
			const intervalId = setInterval(this.monitorRound, 500);
			this.setState({
				paused: false,
				currentRound: this.state.currentRound + 1,
				timer: 30,
				characterBlur: 100,
				characterGray: 100,
				backgroundBlur: 0,
				intervalId,
				awardedPoints: null,
				whiteFlashTransition: '0s'
			});
		}
	};

	monitorRound = () => {
		const maxMovement = 5;
		if (this.state.timer > 25 && !this.state.paused) {
			const rng = Math.floor(Math.random() * 40) + 60;
			this.setState({
				timer: this.state.timer - 0.5,
				characterBlur: rng,
				backgroundBlur: 50 - rng / 2,
				transition: this.state.timer < 30 ? '1s' : '0',
				top: maxMovement - Math.floor(Math.random() * maxMovement),
				left: maxMovement - Math.floor(Math.random() * maxMovement * 2)
			});
		} else if (this.state.timer > 20 && !this.state.paused) {
			const rng = Math.floor(Math.random() * 50) + 30;
			this.setState({
				timer: this.state.timer - 0.5,
				characterBlur: rng,
				backgroundBlur: 50 - rng / 2,
				characterGray: this.state.characterGray > 0 ? this.state.characterGray - 0.5 : 0,
				top: maxMovement - Math.floor(Math.random() * maxMovement),
				left: maxMovement - Math.floor(Math.random() * maxMovement * 2)
			});
		} else if (this.state.timer > 15 && !this.state.paused) {
			const rng = Math.floor(Math.random() * 40) + 20;
			this.setState({
				timer: this.state.timer - 0.5,
				characterBlur: rng,
				backgroundBlur: 50 - rng / 2,
				characterGray: this.state.characterGray > 0 ? this.state.characterGray - 1 : 0,
				top: maxMovement - Math.floor(Math.random() * maxMovement),
				left: maxMovement - Math.floor(Math.random() * maxMovement * 2)
			});
		} else if (this.state.timer > 10 && !this.state.paused) {
			const rng = Math.floor(Math.random() * 25) + 10;
			this.setState({
				timer: this.state.timer - 0.5,
				characterBlur: rng,
				backgroundBlur: 50 - rng / 2,
				characterGray: this.state.characterGray > 0 ? this.state.characterGray - 3 : 0,
				top: (maxMovement - Math.floor(Math.random() * maxMovement)) / 2,
				left: (maxMovement - Math.floor(Math.random() * maxMovement * 2)) / 2
			});
		} else if (this.state.timer > 5 && !this.state.paused) {
			const rng = Math.floor(Math.random() * 10) + 5;
			this.setState({
				timer: this.state.timer - 0.5,
				characterBlur: rng,
				backgroundBlur: 50 - rng / 2,
				characterGray: this.state.characterGray > 0 ? this.state.characterGray - 6 : 0,
				top: (maxMovement - Math.floor(Math.random() * maxMovement)) / 3,
				left: (maxMovement - Math.floor(Math.random() * maxMovement * 2)) / 3
			});
		} else if (this.state.timer >= 0 && !this.state.paused) {
			this.setState({
				timer: this.state.timer - 0.5,
				characterBlur: this.state.timer - 0.5,
				backgroundBlur: 50 - this.state.timer - 0.5,
				characterGray: this.state.characterGray > 0 ? this.state.characterGray - 10 : 0,
				top: 0,
				left: 0
			});
		} else if (!this.state.paused) {
			this.setState({
				paused: true,
				transition: '0s'
			});
			this.startNextRound();
		}
	};

	startNextRound = () => {
		clearInterval(this.state.intervalId);
		setTimeout(this.nextRound, 3000);
	};

	onSelectCharacter = guess => {
		if (!this.state.paused) {
			const { characters, currentRound } = this.state;
			let { correctAnswers } = this.state;
			if (guess === characters[currentRound].name) {
				correctAnswers++;
				setTimeout(this.awardPoints, 3000);
			} else {
				setTimeout(this.awardNoPoints, 3000);
			}

			this.setState({
				paused: true,
				transition: '0s',
				characterBlur: 0,
				characterGray: 0,
				backgroundBlur: 50,
				top: 0,
				left: 0,
				correctAnswers,
				whiteFlashOpacity: 1
			});
			setTimeout(
				() => this.setState({ whiteFlashOpacity: 0, whiteFlashTransition: '1s' }),
				200
			);
		}
	};

	awardNoPoints = () => {
		const delay = 2000;
		this.setState({
			awardedPoints: (
				<table className="round-score">
					<tbody>
						<tr>
							<th>SCORE</th>
						</tr>
					</tbody>
				</table>
			),
			consecutiveAnswers: 0
		});
		setTimeout(() => {
			this.setState({
				awardedPoints: (
					<table className="round-score">
						<tbody>
							<tr>
								<th>SCORE</th>
							</tr>
							<tr>
								<th className="big-red-x">X</th>
							</tr>
						</tbody>
					</table>
				)
			});
		}, delay);
		setTimeout(this.startNextRound, delay * 2);
	};

	awardPoints = () => {
		const score = this.state.score;
		const timeLeft = bonusPoints.timeLeft(Math.ceil(this.state.timer));
		const correctAnswer = bonusPoints.inARow(this.state.consecutiveAnswers + 1);
		const timerAwards = bonusPoints.timeBased(this.state.timer);
		const delay = 2000;
		this.setState({
			awardedPoints: (
				<table className="round-score">
					<tbody>
						<tr>
							<th colSpan="2">SCORE</th>
						</tr>
					</tbody>
				</table>
			),
			consecutiveAnswers: this.state.consecutiveAnswers + 1
		});
		setTimeout(() => {
			this.setState({
				awardedPoints: (
					<table className="round-score">
						<tbody>
							<tr>
								<th colSpan="2">SCORE</th>
							</tr>
							<tr>
								<td>{timeLeft.text}</td>
								<td>{timeLeft.points}</td>
							</tr>
						</tbody>
					</table>
				),
				score: score + timeLeft.points
			});
		}, delay);
		setTimeout(() => {
			this.setState({
				awardedPoints: (
					<table className="round-score">
						<tbody>
							<tr>
								<th colSpan="2">SCORE</th>
							</tr>
							<tr>
								<td>{timeLeft.text}</td>
								<td>{timeLeft.points}</td>
							</tr>
							<tr>
								<td>{correctAnswer.text}</td>
								<td>{correctAnswer.points}</td>
							</tr>
						</tbody>
					</table>
				),
				score: score + timeLeft.points + correctAnswer.points
			});
		}, delay * 2);
		let finalTimeout = delay * 3;
		if (timerAwards) {
			setTimeout(() => {
				this.setState({
					awardedPoints: (
						<table className="round-score">
							<tbody>
								<tr>
									<th colSpan="2">SCORE</th>
								</tr>
								<tr>
									<td>{timeLeft.text}</td>
									<td>{timeLeft.points}</td>
								</tr>
								<tr>
									<td>{correctAnswer.text}</td>
									<td>{correctAnswer.points}</td>
								</tr>
								<tr>
									<td>{timerAwards.text}</td>
									<td>{timerAwards.points}</td>
								</tr>
							</tbody>
						</table>
					),
					score: score + timeLeft.points + correctAnswer.points + timerAwards.points
				});
			}, delay * 3);
			finalTimeout = delay * 4;
		}
		setTimeout(this.startNextRound, finalTimeout);
	};

	render() {
		const characterStyle = {
			filter: `blur(${this.state.characterBlur}px) grayscale(${this.state.characterGray}%)`,
			transition: this.state.transition,
			top: `calc(50% + ${this.state.top * 4}px)`,
			left: `calc(50% + ${this.state.left * 4}px)`
		};

		const backgroundStyle = {
			filter: `blur(${10 - this.state.characterBlur / 3}px)`,
			top: `calc(${this.state.top}px - 5px)`,
			left: `calc(${this.state.left}px - 5px)`
		};

		const cameraOverlay = (
			<div className="overlay-container">
				<img src={cameraTop} className="top" alt="Focus" />
				<img src={cameraBottom} className="bottom" alt="Focus" />
				<img src={cameraLeft} className="left" alt="Focus" />
				<img src={cameraRight} className="right" alt="Focus" />
				{!this.state.paused && <img src={cameraCenter} className="center" alt="Focus" />}
				<div className="black-bottom" />
			</div>
		);

		const optionItems =
			this.state.playing &&
			this.state.characters[this.state.currentRound].options.map(option => (
				<div className="option" key={option} onClick={() => this.onSelectCharacter(option)}>
					{option}
				</div>
			));

		const options = this.state.playing && (
			<div className="options-container">{optionItems}</div>
		);

		const gameRound = this.state.playing && (
			<Fragment>
				<div
					className="white-flash"
					style={{
						opacity: this.state.whiteFlashOpacity,
						transition: this.state.whiteFlashTransition
					}}
				/>
				{this.state.awardedPoints}
				{!this.state.paused && options}
				<div className="round">Round {this.state.currentRound + 1} / 5</div>
				<div className="timer">{Math.ceil(this.state.timer)}</div>
				<div className="score">Score: {this.state.score}</div>
				{cameraOverlay}
				<img
					src={this.state.characters[this.state.currentRound].image}
					style={characterStyle}
					alt="Focus"
					className="character"
				/>
				<img
					src={this.state.backgrounds[this.state.currentRound]}
					className="background"
					style={backgroundStyle}
					alt="Background"
				/>
			</Fragment>
		);

		return (
			<div className="games-focus" ref={this.gameDiv}>
				{this.state.playing ? (
					<div className="game">{gameRound}</div>
				) : (
					<Fragment>
						{this.state.playedOnce && (
							<div className="previous-score">Previous Score: {this.state.score}</div>
						)}
						<HowToPlay pages={guidePages} />
						<div className="play" onClick={this.resetGame}>
							PLAY
						</div>
					</Fragment>
				)}
			</div>
		);
	}
}

export default GamesFocus;
