import React from 'react';
import PropTypes from 'prop-types';

import './PaginationForArrays.css';

export const PaginationForArrays = ({ currentPage, numPages, onChange }) => {
	const pagination = [];
	for (let i = 0; i < numPages; i++) {
		pagination.push(
			<span
				className={i === currentPage - 1 ? 'active page' : 'page'}
				onClick={() => onChange(i + 1)}
			/>
		);
	}

	return <div className="pagination-for-arrays">{pagination}</div>;
};

PaginationForArrays.propTypes = {
	currentPage: PropTypes.number.isRequired,
	numPages: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};

export default PaginationForArrays;
