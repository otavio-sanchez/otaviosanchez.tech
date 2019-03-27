import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../../theme';


ThemeProvider.defaultProps = {
	theme: {},
};

const StyleDiv = styled.div`
    color: ${props => props.style.font.color};
    font-family: ${props => props.style.font.family};
	font-size: ${props => props.style.font.size};
`;

/* eslint-disable-next-line */
injectGlobal`
  	body{
		background-color: ${theme.colors.background}
	}
`;


const StyleComponent = ({ children }) => (
	<ThemeProvider theme={theme}>
		<StyleDiv style={theme.body}>
			{children}
		</StyleDiv>
	</ThemeProvider>
);


export default StyleComponent;
