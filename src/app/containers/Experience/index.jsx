import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const ExperienceList = styled.div`

	font-size: 14px;
	font-weight: 400;
	padding-bottom: 20px;
	letter-spacing: 0.5px;

		.title{
			position: relative;
			font-size: 18px;
			margin:0;
			padding: 0;
		}

		.subtitle{
			position: relative;
			font-size: 16px;
			margin:0;
			padding: 0;
			opacity: 0.8;
		}

		p{
			padding: 0;
			margin: 0;
		}

		.skills{
			padding: 10px 0 30px 0; 
		}

		.item-date{
			color: #f04;
			width: 100%;
			display: inline-block;
		}
	
`;


const ExperienceContent = styled.section`
	max-width: 935px;
	margin: auto;
`;

const Title = styled.h2`
	font-size: 24px;
	text-align: left;
`;

const Experience = ({ list }) => (
	<ExperienceList>

		<ExperienceContent>
			<Grid>
				<Row>
					<Col xs={12}>
						<Title>
							{'Experiência'}
						</Title>
						<Grid>
							{
								list.map(item => (
									<Row>
										<Col md={1} sm={12}>
											<span className="item-date">
												{' '}
												{item.date}
												{' '}
											</span>
										</Col>
										<Col md={11} sm={12}>
											<h1 className="title">
												{' '}
												{item.company}
											</h1>

											<h2 className="subtitle">
												{' '}
												{item.job}
											</h2>

											<p>
												{' '}
												{item.description}
											</p>

											<div className="skills">
												{'Principais tecnologias utilizadas: '}
												{item.skills}
											</div>
										</Col>
									</Row>
								))
							}
						</Grid>
					</Col>
				</Row>
			</Grid>
		</ExperienceContent>

	</ExperienceList>
);


export default Experience;
