import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem';

import DropdownStyles from '../Dropdown/DropdownStyles'

class Dropdown extends Component {
  render() {

    const { searchResults, handleOnListItemClick } = this.props;
    
    return (
      <DropdownStyles>
        <ul>
          {searchResults !== null ? searchResults.map((item, key) => (
            <ListItem 
              text={item.item.searchTerm}
              handleOnListItemClick={handleOnListItemClick}
              searchMatches={item.matches}
            />
          )) : null
          }
        </ul>
      </DropdownStyles>
    )
  }
}

export default Dropdown;


