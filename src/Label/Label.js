import React from 'react';
import PropTypes from 'prop-types';

import LabelStyles from './LabelStyles';

const Label = ({ text, htmlFor }) => (
  <LabelStyles>
    <label htmlFor={htmlFor}>
      {text}
    </label>
  </LabelStyles>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
