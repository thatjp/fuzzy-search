import React from 'react'
import ListItemStyles from './ListItemStyles'

const ListItem = ({ 
  text, 
  key, 
  handleOnListItemClick,
  searchMatches
}) => {

  const formatedText = (text, indicies) => {
    const highlightedInputValue = text.split('')
    highlightedInputValue.splice(indicies[0], 1, '<span className="match">', text[indicies[0]], '</span>');
    console.log(highlightedInputValue);
    return highlightedInputValue
  }

  return (
    <ListItemStyles key={key}>
      <button 
        type="button"
        onClick={(e) => handleOnListItemClick(e)}
        value={formatedText(text, searchMatches[0].indices[0])}
      >
        {formatedText(text, searchMatches[0].indices[0])}
      </button>
    </ListItemStyles>
  )
}

export default ListItem;
