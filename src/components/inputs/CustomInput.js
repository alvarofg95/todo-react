import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = ({name, placeholder, value, onChange, onKeyDown}) => (
  <input
    type="text"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

CustomInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func
};

export default CustomInput;
