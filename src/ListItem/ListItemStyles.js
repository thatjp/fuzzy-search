import styled from 'styled-components';

const ListItemStyles = styled.li`
  text-align: left;
  list-style-type: none;
  border-bottom: 1px solid #d9dbde;
  text-align: center;
  .match {
    color: #ff968f;
    background: #edf4ff;
  }
  .active {
    background: #cce0ff;;
  }
  button {
    display: block;
    border: none;
    padding: 1rem 2rem;
    width: 100%;
    margin: 0;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 150ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    :hover {
      background: #edf4ff;
  }
  }
`;

export default ListItemStyles;
