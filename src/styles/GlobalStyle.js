import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
		background: white;
	}
	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body {
		font-size: 1rem;
		font-family: ${(props) => props.theme.font}, sans-serif;
		color: ${(props) => props.theme.primaryColor};
		background-color: ${(props) => props.theme.bg};
		line-height: 1.8;
	}
	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	input, textarea {
		font-family: ${(props) => props.theme.font}, sans-serif;
		font-size: 1rem;
	}
	input:focus, textarea:focus, button:focus, video:focus {
			outline: none;
	}
	textarea {
		resize: none;
	
	@media screen and (max-width: 500px) {
		body {
			font-size: 0.9rem;
		}
	}
`;

export default GlobalStyle;