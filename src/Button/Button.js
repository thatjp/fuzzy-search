import React from 'react'
import Proptypes from 'prop-types'
import ButtonStyles from './ButtonStyles'

const Button = ({ text, onClick, type, name }) => {
  return (
    <>
      <ButtonStyles 
        type={type} 
        onClick={onClick}
        name={name}
      >
        {text}
      </ButtonStyles>
    </>
  )
}

Button.propTypes = {
  type: Proptypes.string,
  text: Proptypes.string,
  onClick: Proptypes.func,
}

export default Button;
