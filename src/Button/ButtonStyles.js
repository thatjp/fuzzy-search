import styled from 'styled-components';

const ButtonStyles = styled.button`

	background-color: #FF5A5F;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 10px;
	border: 1px solid #ffffff;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 15px;
	padding: 13px 30px;
	text-decoration: none;
	margin-top: 30px;
	
	:focus {outline:0;}

  :hover {
		background-color: #ff8c90;
		transition: background 150ms ease-in-out, transform 150ms ease;
  }

  :active {
    position: relative;
    top: 1px;
  }
`;

export default ButtonStyles;
