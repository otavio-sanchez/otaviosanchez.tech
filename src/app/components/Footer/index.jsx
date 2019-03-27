import React from 'react';
import propTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const FooterBlock = styled.footer`

	width: 100%;
	border-top: 1px solid #ddd;

	.text{
		font-size: ${props => props.style.font.size};
		color: ${props => props.style.font.color};
		font-family: ${props => props.style.font.family};
		font-weight: 500;
	}

`;

const Footer = ({ title, theme }) => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterBlock style={theme.footer}>
			<Grid fluid>
				<Row center="xs">
					<Col xs={12}>
						<h5 className="text">{ `${title} - ${currentYear}` }</h5>
					</Col>
				</Row>
			</Grid>
		</FooterBlock>
	);
};

Footer.propTypes = {
	title: propTypes.string,
};

Footer.defaultProps = {
	title: 'Boilerplate',
};

export default withTheme(Footer);
