import styled from 'styled-components';

const ButtonStyles = styled.button`

	background-color:#e4685d;
	-moz-border-radius:10px;
	-webkit-border-radius:10px;
	border-radius:10px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:13px 30px;
	text-decoration:none;
	
	:focus {outline:0;}

  :hover {
    background-color:#eb675e;
  }

  :active {
    position:relative;
    top:1px;
  }
`;

export default ButtonStyles;
