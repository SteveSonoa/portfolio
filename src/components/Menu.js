import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { disableMenu, enableMenu } from '../reducers/menuReducer';

export const Menu = ({ disableMenu, enableMenu, menu }) => (
	<div className={`menu ${menu ? 'active' : ''}`} onClick={menu ? disableMenu : enableMenu}>
		{menu ? (<div style={{ padding: '10px', backgroundColor: 'red', width: '45px', borderRadius: '50%' }}>-</div>) : (<div style={{ padding: '10px', backgroundColor: 'green', width: '45px', borderRadius: '50%' }}>+</div>)}
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
