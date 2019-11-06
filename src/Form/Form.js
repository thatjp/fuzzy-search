import React, { Component } from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import FormStyles from './FormStyles'

export default class Form extends Component {
  state = {
    searchValue: null,
    wasSubmitted: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { wasSubmitted } = this.state;
    console.log('submitted');
    this.setState({
      wasSubmitted: !wasSubmitted,
    })
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
