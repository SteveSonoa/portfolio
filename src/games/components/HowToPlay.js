import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import { Image, LinkRenderer, ModalContent, PaginationForArrays } from './';
import './HowToPlay.css';

export class HowToPlay extends PureComponent {
	static propTypes = {
		// pages is an array of MD documents
		pages: PropTypes.array.isRequired
	};

	state = {
		page: 1,
		showModal: false
	};

	toggleModal = () => {
		this.setState({
			page: 1,
			showModal: !this.state.showModal
		});
	};

	updatePage = newPage => {
		this.setState({
			page: newPage
		});
	};

	renderPage = page => (
		<Markdown
			className="how-to-play-page"
			source={page}
			escapeHtml
			renderers={{
				Image: Image,
				Link: LinkRenderer
			}}
		/>
	);

	render() {
		const { pages } = this.props;
		// const pages = [pageOne, pageTwo, pageThree];
		const { page, showModal } = this.state;

		return (
			<Fragment>
				<button onClick={this.toggleModal} className="how-to-play">
					How To Play
				</button>
				{showModal && (
					<ModalContent handleClose={this.toggleModal}>
						<div>{this.renderPage(pages[page - 1])}</div>
						<div>
							<PaginationForArrays
								currentPage={page}
								numPages={pages.length}
								onChange={this.updatePage}
							/>
						</div>
					</ModalContent>
				)}
			</Fragment>
		);
	}
}

export default HowToPlay;
