import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';


const AboutMeModule = styled.section`
	padding: 40px 0;

 	
`;

const AboutMeTextContainer = styled.p`
	text-align: justify;	
`;

const Title = styled.h2`
	margin: 10px 0;
	font-size: 24px;
	text-align: left;
`;

const SubTitle = styled.h3`
	font-weight: 500;
	margin: 5px 0 0 0;
	opacity: 0.8;
	text-align: left;
`;

const Content = styled.section`
  max-width: 935px;
  width: 100%;
  margin: auto;
  text-align: left;

  hr{
		height: 3px;
		border: 0px;
		width: 10%;
		background-color: #f04;
		margin: 22px 0 3px 0;
		vertical-align: top;
	}
  
`;

class AboutMe extends Component {
	state = {
		error: false,
	}


	componentDidCatch() {
		this.setState({
			error: true,
		});
	}


	render() {
		const { error } = this.state;
		const {
			text, title, subTitle, children,
		} = this.props;

		if (error) {
			return (<div> Ocorreu um Erro. </div>);
		}

		return (
			<AboutMeModule>
				<Grid fluid>
					<Row center="xs">
						<Col xs={12}>

							<Content>
								<Grid fluid>
									<Row center="xs">
										<Col md={6} sm={12}>

											<Title>
												{title}
											</Title>

											<SubTitle>
												{subTitle}
											</SubTitle>

											<hr />

											<AboutMeTextContainer>
												{text}
											</AboutMeTextContainer>
										</Col>
										<Col md={6} sm={12}>
											{ children }
										</Col>
									</Row>
								</Grid>
							</Content>
						</Col>
					</Row>
				</Grid>
			</AboutMeModule>
		);
	}
}


export default AboutMe;
