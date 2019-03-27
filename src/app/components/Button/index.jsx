import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes from 'prop-types';

const ButtonDefault = styled.button`
    background-color:  ${props => (props.primary ? props.theme.main : props.theme.alternative)};
    color: #fff;
    font-size: 1em;
    padding: 0.8em 2.5em;
    border: 1px solid  ${props => (props.primary ? props.theme.main : props.theme.alternative)};
	letter-spacing: 3px;
	transition: all  0.2s ease-in-out;
	font-size: 17px;
	outline: none;
	cursor: pointer;
	
	&:hover{
		transition: all  0.2s ease-in-out;
		background-color:  ${props => (props.primary ? props.theme.alternative : props.theme.main)};
		border: 1px solid  ${props => (props.primary ? props.theme.alternative : props.theme.main)};
	}
`;


class Button extends Component {
	onClickHandler = (event) => {
		const { onClick } = this.props;
		onClick(event);
	}

	render() {
		const {
			children, primary, type, theme,
		} = this.props;

		return (
			<ButtonDefault
				type={type}
				onClick={this.onClickHandler}
				primary={primary}
				theme={theme.colors}
			>
				{ children }
			</ButtonDefault>
		);
	}
}

Button.propTypes = {
	onClick: propTypes.func.isRequired,
	children: propTypes.string.isRequired,
	primary: propTypes.bool,
	type: propTypes.string,
};

Button.defaultProps = {
	primary: true,
	type: 'button',
};

export default withTheme(Button);
