import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Search from '../../containers/Search';
import List from '../../components/List';
import Loading from '../../components/Loading';
import actions from './store/actions';


const ArticlesModule = styled.section`

`;

class Articles extends Component {
	state = {
		error: false,
	}

	onSearch = async (responseSearch) => {
		const { dispatch } = this.props;
		dispatch(actions.searchArticles(responseSearch));
	}

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}


	render() {
		const { error } = this.state;
		const { articles } = this.props;

		if (error) {
			return (<div> error </div>);
		}

		return (
			<ArticlesModule>
				<Grid fluid>
					<Row middle="xs">
						<Col xs={12}>
							<Search
								onSearch={this.onSearch}
								parameter="userId"
								route="posts"
								textButton="Buscar"
								textPlaceholder="Buscar por..."
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<Loading on={articles.loading}>
								<List
									body="body"
									data={articles.list}
									header="title"
									id="id"
								/>
							</Loading>
						</Col>
					</Row>
				</Grid>
			</ArticlesModule>
		);
	}
}

const mapStateToProps = state => ({
	articles: state.articles,
});

Articles.propTypes = {
	dispatch: propTypes.func.isRequired,
};


export default connect(mapStateToProps)(Articles);
