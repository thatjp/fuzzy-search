import styled from 'styled-components';

const ListItemStyles = styled.li`
  text-align: left;
  list-style-type: none;
  border-bottom: 1px solid grey;
  text-align: center;
  .match {
    color: red;
  }
  :hover {
    background: green;
  }
  button {
    padding: 15px;
  }
`;

export default ListItemStyles;
