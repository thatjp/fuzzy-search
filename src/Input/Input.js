import React from 'react';
import PropTypes from 'prop-types';

import InputStyles from './InputStyles';


const Input = ({
  onChange,
  name,
  value,
  type,
  onKeyDown,
}) => (
  <InputStyles>
    <label htmlFor="site-search">
      Search Our Foods
    </label>
    <input
      type={type}
      name={name}
      onChange={e => onChange(e)}
      value={value}
      autoComplete="off"
      onKeyDown={e => onKeyDown(e)}
    />
  </InputStyles>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default Input;
