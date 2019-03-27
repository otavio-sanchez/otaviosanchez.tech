import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';


const ContactModule = styled.section`
	width: 100%;
	background-color: #f3f3f3;
	font-size: 14px;
	font-weight: 400;
	padding: 40px 0;

	.line{
		padding-bottom: 10px;
	}

	a{
		color: #f04;
		letter-spacing: 1px;
	}
`;


const ContactContent = styled.section`
	max-width: 935px;
	margin: auto;
	background-color: #f3f3f3;
`;

const Title = styled.h2`
	margin: 10px 0;
	font-size: 24px;
	text-align: left;
`;

const socialNetworks = [
	{
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/ot%C3%A1vio-sanchez/',
	},
	{
		name: 'GitHub',
		link: 'https://github.com/otavio-sanchez',
	},
	{
		name: 'npm',
		link: 'https://www.npmjs.com/~otavio-sanchez',
	},
];


class Contact extends Component {
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

		if (error) {
			return (<div> error </div>);
		}

		return (
			<ContactModule>
				<ContactContent>
					<Grid fluid>
						<Row>
							<Col md={6} sm={12}>

								<Title>
									{'Contato'}
								</Title>
								<div className="line">
									<span>
										{'Email: '}
									</span>
									<a href="mailto:sanchezotavio@gmail.com" title="email">
										{'sanchezotavio@gmail.com'}
									</a>
								</div>
								<div className="line">
									<span>
										{'Celular: '}
									</span>
									<a href="tel:11991000880" title="celular">
										{'(11)99100-0880'}
									</a>
								</div>
							</Col>
							<Col md={6} sm={12}>

								<Title>
									{'Redes Sociais'}
								</Title>
								<div>
									{
										socialNetworks.map(
											socialNetwork => (
												<div className="line" key={socialNetwork.name}>
													<a
														href={socialNetwork.link}
														title={socialNetwork.name}
														rel="noopener noreferrer"
														target="_blank"
													>
														{socialNetwork.name}
													</a>

												</div>
											),
										)
									}
								</div>
							</Col>
						</Row>
					</Grid>
				</ContactContent>
			</ContactModule>
		);
	}
}


export default Contact;
