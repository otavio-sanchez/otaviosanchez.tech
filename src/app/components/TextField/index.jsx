import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import propTypes from 'prop-types';

const TextFieldDefault = styled.input`
    border: 1px solid #fff;
	width: 100%;
	outline: none;
	transition: color 0.3s ease-in-out;
	
	&[type=text]:focus {
		transition: color 0.3s ease-in-out;
		color: ${props => props.style.alternative}
	}
`;


class TextField extends Component {
    state = { value: '' }

	handleChange = (event) => {
		const { onChange } = this.props;
		this.setState({
			value: event.target.value,
		}, () => {
			const { value } = this.state;

			onChange(value);
		});
	}

	render() {
		const { value } = this.state;
		const { placeholder, theme } = this.props;

		return (
			<TextFieldDefault type="text" style={theme.colors} placeholder={placeholder} onChange={this.handleChange} value={value} />
		);
	}
}

TextField.propTypes = {
	onChange: propTypes.func.isRequired,
	placeholder: propTypes.string,
};

TextField.defaultProps = {
	placeholder: 'input',
};

export default withTheme(TextField);
