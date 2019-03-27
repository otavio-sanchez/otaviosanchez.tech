import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const AboutPage = styled.div`
	  min-height: 100vh;
	  padding-top: 20px;
	   
`;


const About = () => (
	<AboutPage>
		<Grid fluid>
			<Row>
				<Col xs={12}>
					<div>About</div>
				</Col>
			</Row>
		</Grid>
	</AboutPage>
);

export default About;
