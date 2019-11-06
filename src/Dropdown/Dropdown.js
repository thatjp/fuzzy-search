import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import ListItem from '../ListItem/ListItem';

import DropdownStyles from '../Dropdown/DropdownStyles'

import { updateCurrentInput } from '../redux/actions/searchActions';
class Dropdown extends Component {

  state = {
    cursor: 0,
    result: []
  }

  formatedText = (text, indicies) => {
    const highlightedInputValue = text.split('')
    highlightedInputValue.splice(indicies[0], 1, '<span class="match">', text[indicies[0]], '</span>');
    return highlightedInputValue.join('')
  }

  render() {

    const { 
      searchResults, 
      onListItemClick, 
      onListItemHoverEnter,
      onListItemHoverExit,
      cursor,
      updateCurrentInput
    } = this.props;

    if (searchResults[cursor] !== undefined) { 
      updateCurrentInput(searchResults[cursor].item.searchTerm)
    }

    return (
      <DropdownStyles>
        <ul>
          {searchResults !== null ? searchResults.map((item, key) => (
            <ListItem 
              searchText={this.formatedText(item.item.searchTerm, item.matches[0].indices[0])}
              text={item.item.searchTerm}
              onListItemClick={onListItemClick}
              onListItemHoverEnter={onListItemHoverEnter}
              onListItemHoverExit={onListItemHoverExit}
              searchMatches={item.matches}
              keyValue={key}
              cursor={cursor}
              searchResults={searchResults}
            />
          )) : null
          }
        </ul>
      </DropdownStyles>
    )
  }
}

Dropdown.propTypes = {
  searchResults: PropTypes.string.isRequired,
  onListItemClick: PropTypes.func.isRequired,
  onListItemHoverEnter: PropTypes.func.isRequired,
  onListItemHoverExit: PropTypes.func.isRequired,
  cursor: PropTypes.number.isRequired,
  updateCurrentInput: PropTypes.func.isRequired,
}

export default connect(null, { updateCurrentInput })(Dropdown);
