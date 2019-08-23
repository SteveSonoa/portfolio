import React from 'react';
// import { connect } from 'react-redux';

export const Menu = ({ menu }) => (
	<div className={`menu ${menu ? 'active' : ''}`}>
		Hi!
	</div>
);

// const mapStateToProps = ({ menu = true }) => ({
//     menu
// });

// export default connect(mapStateToProps, {})(Menu);
export default Menu;
