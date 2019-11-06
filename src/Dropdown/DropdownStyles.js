import styled from 'styled-components';

const DropdownStyles = styled.div`
  position: absolute;
  display: block;
  border-bottom: 1px solid #d9dbde;
  height: 200px;
  width: 30%;
  overflow-y: scroll;
  background: white;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default DropdownStyles;
