import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import api from '../../../helpers/api';

const SearchForm = styled.form`
  border: 1px solid #ccc;
  width: 100%;
  padding: 2px;
  border-radius: 10px;

  div {
	  padding: 1px 3.5px;
  }
`;

class Search extends Component {
	state = {
		value: null,
		searchValid: false,
	}

	isNotValid= value => value === null || value === ''

	onChangeText = (value) => {
		this.setState({
			value,
			searchValid: this.isNotValid(value),
		});
	}

	onSearch = (event) => {
		event.preventDefault();
		const { onSearch, parameter, route } = this.props;
		const { value } = this.state;

		if (!this.isNotValid(value)) {
			const request = api.get(`${route}?${parameter}=${value}`);
			onSearch(request);
		}
	}

	render() {
		const { textPlaceholder, textButton } = this.props;

		const { searchValid } = this.state;

		return (
			<SearchForm>

				<Grid fluid>
					<Row middle="xs">
						<Col xs={10}>
							<TextField placeholder={textPlaceholder} onChange={this.onChangeText} />
						</Col>
						<Col xs={2}>
							<Button type="submit" disabled={searchValid} onClick={this.onSearch}>
								{textButton}
							</Button>
						</Col>
					</Row>
				</Grid>


			</SearchForm>
		);
	}
}

Search.propTypes = {
	textButton: propTypes.string,
	textPlaceholder: propTypes.string,
};

Search.defaultProps = {
	textButton: 'Search',
	textPlaceholder: 'Search',
};

export default Search;
