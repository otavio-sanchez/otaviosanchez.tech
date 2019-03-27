import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import List from '../../components/List';
import Loading from '../../components/Loading';
import actions from './store/actions';
import api from '../../../helpers/api';

const NewsModule = styled.section`
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	padding-bottom: 40px;

	h1{
		padding: 0;
		margin: 0;
	}
`;


const NewsContent = styled.section`
	max-width: 935px;
	margin: auto;
`;


class News extends Component {
	state = {
		error: false,
	}

	componentDidMount() {
		this.onLoad();
	}

	onLoad = async () => {
		const response = api.get('/api/projects');

		const { dispatch } = this.props;

		dispatch(actions.listProjects(response));
	}

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}


	render() {
		const { error } = this.state;
		const { projects } = this.props;

		if (error) {
			return (<div> error </div>);
		}

		return (
			<NewsModule>
				<NewsContent>
					<Grid fluid>
						<Row>
							<Col xs={12}>
								<h1> Projetos </h1>
								<Loading on={projects.loading}>
									<List
										url="url"
										data={projects.list}
										header="name"
										date="date"
										id="name"
										type="type"
									/>
								</Loading>
							</Col>
						</Row>
					</Grid>
				</NewsContent>
			</NewsModule>
		);
	}
}

const mapStateToProps = state => ({
	projects: state.projects,
});

News.propTypes = {
	dispatch: propTypes.func.isRequired,
};


export default connect(mapStateToProps)(News);
