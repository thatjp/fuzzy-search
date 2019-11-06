import React from 'react';
import PropTypes from 'prop-types';

import TitleStyles from './TitleStyles';

const Title = ({ text }) => (
  <TitleStyles>
    {text}
  </TitleStyles>
);

Title.protoTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
