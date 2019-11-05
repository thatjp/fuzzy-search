import React from 'react'
import InputStyles from './InputStyles'

import Label from '../Label/Label'

const Input = ({
  onChange,
  name,
  value,
  type
}) => {
  return (
    <InputStyles>
      <label htmlFor="site-search"> 
        Search Our Foods
      </label>
      <input 
        type={type}
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
        autoComplete="off"
      />
    </InputStyles>
  )
}

export default Input
