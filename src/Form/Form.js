import React, { Component } from 'react'
import Button from '../Button/Button'

export default class Form extends Component {
  state = {
    searchValue: null,
    wasSubmitted: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      wasSubmitted: !this.state.wasSubmitted,
    })
  }

  render() {
    const { wasSubmitted, searchValue } = this.state;
    return (
      <div>
        <form 
          onSubmit={this.handleSubmit}
        >
          {this.props.children}
          <Button 
            text="Submit"
            type="submit"
          />
        </form>
        {
          wasSubmitted && searchValue === null &&
          <h2>Your search was empty</h2>
        }
        {
          wasSubmitted && searchValue !== null &&
          <h2>You searched {this.props.searchValue}</h2>
        }
      </div>
    )
  }
}
