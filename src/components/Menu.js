import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { disableMenu, enableMenu } from '../reducers/menuReducer';
import { Text } from './';

export const Menu = ({ disableMenu, enableMenu, menu }) => (
	<div className={`menu no-margin ${menu ? 'active' : ''}`} onClick={menu ? disableMenu : enableMenu}>
		{menu ? (<div className="pointer menu-icon" style={{ padding: '10px', backgroundColor: 'red', width: '45px', borderRadius: '50%' }}>-</div>) : (<div className="pointer menu-icon" style={{ padding: '10px', backgroundColor: 'green', width: '45px', borderRadius: '50%' }}>+</div>)}
		<div className="menu-content light">
			<Text tag='h2'>FullStackSteve.com</Text>
			<Text tag='h3'>Steve Marshall * Web Developer</Text>
			<ul>
				<li>CSS Layouts</li>
				<li>Testing Frameworks</li>
				<li>Games</li>
				<li>Production Examples</li>
				<li>Resume (PDF)</li>
			</ul>
		</div>
	</div>
);

Menu.propTypes = {
	disableMenu: PropTypes.func.isRequired,
	enableMenu: PropTypes.func.isRequired,
	menu: PropTypes.bool.isRequired
};

const mapStateToProps = ({ menu }) => ({
    menu
});

export default connect(mapStateToProps, { disableMenu, enableMenu })(Menu);
