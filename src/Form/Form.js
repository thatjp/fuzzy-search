import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Title from '../Title/Title'

import FormStyles from './FormStyles'

class Form extends Component {
  state = {
    searchValue: null,
    wasSubmitted: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      wasSubmitted: true,
    }, () => this.afterSubmit())
  }

  afterSubmit = () => {
    setTimeout(() => {
      this.setState({
        wasSubmitted: false
      })
    }, 3000);
  }

  render() {
    const { wasSubmitted } = this.state;
    const { searchValue } = this.props;

    return (
      <FormStyles>
        <form 
          onSubmit={e => this.handleSubmit(e)}
        >
          {this.props.children}
          <Button 
            text="Submit"
            type="submit"
          />
        </form>
        {wasSubmitted ? <Title text={`You searched for ${searchValue}`}/> : null}
      </FormStyles>
    )
  }
}

Form.propTypes = {
  searchValue: PropTypes.string.isRequired,
}

export default Form;
