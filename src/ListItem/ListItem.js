import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import ListItemStyles from './ListItemStyles';

const ListItem = ({
  text,
  keyValue,
  onListItemClick,
  searchText,
  cursor,
  onListItemHoverEnter,
  onListItemHoverExit,
}) => (
  <ListItemStyles>
    <div
      onMouseEnter={(e) => onListItemHoverEnter(e, text)}
      onMouseLeave={e => onListItemHoverExit(e)}
    >
      <button
        className={cursor === keyValue ? 'active' : null}
        type="button"
        onClick={e => onListItemClick(e)}
        value={text}
      >
        {parse(searchText)}
      </button>
    </div>
  </ListItemStyles>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  onListItemClick: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  cursor: PropTypes.number.isRequired,
  onListItemHoverEnter: PropTypes.func.isRequired,
  onListItemHoverExit: PropTypes.func.isRequired,
};

export default ListItem;
