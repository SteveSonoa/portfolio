import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { disableMenu, enableMenu } from '../reducers/menuReducer';
import { fetchGiphyImages } from '../reducers/giphyReducer';
import { DropdownContainer, Text } from './';

export const Menu = ({ disableMenu, enableMenu, menu, giphy, fetchGiphyImages }) => (
	<div className={`menu no-margin ${menu ? 'active' : ''}`}>
		<div className={'pointer menu-icon'} onClick={menu ? disableMenu : enableMenu}>{menu ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}</div>
		<div className="menu-content">
			<Text tag='h2'>FullStackSteve.com</Text>
			<Text tag='h3'>Steve Marshall * Web Developer</Text>
			<ul>
				<li>CSS Layouts</li>
				<li>Testing Frameworks</li>
				<li>Games</li>
				<li>Production Examples</li>
				<li>Resume (PDF)</li>
			</ul>
			<button onClick={() => fetchGiphyImages('superman')}>Get Giphy Images</button> {giphy.loading ? <span className='loading'><i class="fas fa-sync-alt fa-spin" /></span> : giphy.success ? <span className='success' /> : giphy.error ? <span className='error' /> : null}
			<DropdownContainer
				title='THIS IS THE TITLE'
				options={[
					{ name: 'Cats', value: 'cat kitten lion' },
					{ name: 'Marvel', value: 'marvel mcu ironman hulk' },
					{ name: 'Star Wars', value: 'starwars yoda darth kenobi xwing' },
					{ name: 'Disney', value: 'disney disneyland mickey pluto donald' }
				]}
				action={fetchGiphyImages}
			/>
		</div>
	</div>
);

Menu.propTypes = {
	disableMenu: PropTypes.func.isRequired,
	enableMenu: PropTypes.func.isRequired,
	menu: PropTypes.bool.isRequired
};

const mapStateToProps = ({ menu, giphy }) => ({
	menu,
	giphy
});

export default connect(mapStateToProps, { disableMenu, enableMenu, fetchGiphyImages })(Menu);
