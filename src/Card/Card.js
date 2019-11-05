import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fuse from 'fuse.js'

import CardStyles from './CardStyles'
import Title from '../Title/Title'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'

import { updateCurrentSearch, } from '../redux/actions/searchActions';

const fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 1,
  keys: ["searchTerm"]
};

class Card extends Component {
  state = {
    inputIsFocused: false,
  }

  handleOnHover = () => {
    this.setState({
      inputIsFocused: true
    })
  }

  handleOnChange = (e) => {
    const { value } = e.target;
    const { updateCurrentSearch } = this.props;
    updateCurrentSearch(value)
  }

  handleOnListItemClick = (e) => {
    e.preventDefault()
    const { updateCurrentSearch } = this.props;
    const { value } = e.target;
    updateCurrentSearch(value)
  }

  render() {
    const { data } = this.props;

    const fuse = new Fuse(data, fuseOptions);
    const searchResults = this.props.search ? fuse.search(this.props.search) : null;

    return (
      <CardStyles>
        <Title text={this.props.title}/>
        <Form
          searchValue={this.props.search}
        >
          <Input
            onChange={this.handleOnChange}
            name={this.props.name}
            value={this.props.search ? this.props.search : this.props.search}
            type="search"
          />
          {
            searchResults && searchResults.length > 0 &&
            <Dropdown
              searchResults={searchResults}
              handleOnListItemClick={(e) => this.handleOnListItemClick(e)}
            />
          }
        </Form>
      </CardStyles>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search.currentSearch,
});


export default connect(mapStateToProps, { updateCurrentSearch })(Card);