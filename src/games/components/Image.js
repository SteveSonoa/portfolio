import React from 'react';
import PropTypes from 'prop-types';

// TODO: Add GET request to image API here
// TODO: Create image API that has AWS credentials on the server
const getImageProps = ({ src, alt, caption }) => ({
	src: `https://rexxars.github.io/react-layout-pack/img/${src}`,
	alt: alt.replace(/\(\d+\)$/, ''),
	caption
});

export const Image = props => {
	const { src, alt, caption } = getImageProps(props);

	return (
		<div className={`image-wrapper ${props.className}`}>
			<img src={src} alt={alt} />
			{caption && <div className="caption">{caption}</div>}
		</div>
	);
};

Image.propTypes = {
	alt: PropTypes.string,
	caption: PropTypes.string,
	className: PropTypes.string,
	src: PropTypes.string.isRequired
};

Image.defaultProps = {
	alt: 'Ride The Teacups',
	caption: null,
	className: ''
};

export default Image;
