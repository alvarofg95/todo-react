import React from 'react';
import PropTypes from 'prop-types';

const Image = ({src, width, alt, onClick}) => (
  <img src={src} width={width} alt={alt} onClick={onClick} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func
};

export default Image;
