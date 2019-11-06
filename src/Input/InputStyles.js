import styled from 'styled-components';

const InputStyles = styled.div`
  position: relative;

  input[type=search], select {
    width: 100%;
    margin-top: 30px;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  input:focus {
    outline:0;
  }

  label {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default InputStyles;
