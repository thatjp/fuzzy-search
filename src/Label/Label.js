import React from 'react'
import LabelStyles from './LabelStyles'

const Label = ({ text, htmlFor }) => {
  return (
    <LabelStyles>
      <label htmlFor={htmlFor}>
        {text}
      </label>
    </LabelStyles>
  )
}

export default Label
