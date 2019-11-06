import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Fuse from 'fuse.js'

import Title from '../Title/Title'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'

import CardStyles from './CardStyles'

import { updateCurrentSearch, updateCurrentInput} from '../redux/actions/searchActions';

const fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  findAllMatches: true,
  minMatchCharLength: 1,
  keys: ["searchTerm"]
};

class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cursor: -1,
      result: [],
      openDropDown: false,
      inputValue: '',
      hoverStateTrue: false,
    }
  }

  handleOnHoverEnter = (e, text) => {
    const { updateCurrentInput } = this.props;
    updateCurrentInput(text)
    this.setState({
      hoverStateTrue: true
    })
  }

  handleOnHoverExit = () => {
    this.setState({
      hoverStateTrue: false,
      inputValue: ''
    })
  }

  handleOnChange = (e) => {
    const { value } = e.target;
    const { updateCurrentSearch } = this.props;
    updateCurrentSearch(value)
    this.setState({
      openDropDown: true,
      inputValue: ''
    })
  }

  handleOnListItemClick = (e) => {
    const { value } = e.target;
    const { updateCurrentSearch } = this.props;
    updateCurrentSearch(value)
    this.setState({
      openDropDown: false,
      hoverStateTrue: false,
    })
  }

  handleKeyDown = (e) => {
    const { input } = this.props;
    const { updateCurrentSearch } = this.props;
    if (e.key === 'ArrowUp') {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1,
        hoverStateTrue: true,
      }))
    } else if (e.key === 'ArrowDown') {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1,
        hoverStateTrue: true,
      }))
    } else if (e.key === 'Enter') {
      updateCurrentSearch(input)
      this.setState({
        openDropDown: false,
        hoverStateTrue: false,
        cursor: -1,
      })
    }
  }

  render() {
    const { openDropDown, cursor, hoverStateTrue } = this.state;
    const { data, search, title, input } = this.props;

    const fuse = new Fuse(data, fuseOptions);
    const searchResults = search ? fuse.search(search) : null;

    return (
      <CardStyles>
        <Title text={title}/>
        <Form
          searchValue={input}
        >
          <Input
            onKeyDown={this.handleKeyDown}
            onChange={this.handleOnChange}
            value={hoverStateTrue ? input : search}
            type="search"
          />
          {
            openDropDown && searchResults && searchResults.length > 0 &&
            <Dropdown
              searchResults={searchResults}
              onListItemClick={this.handleOnListItemClick}
              onListItemHoverExit={this.handleOnHoverExit}
              onListItemHoverEnter={this.handleOnHoverEnter}
              cursor={cursor}
            />
          }
        </Form>
      </CardStyles>
    )
  }
}

Card.propTypes = {
  search: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  search: state.search.currentSearch,
  input: state.search.currentInput,
});

export default connect(mapStateToProps, { updateCurrentSearch, updateCurrentInput })(Card);