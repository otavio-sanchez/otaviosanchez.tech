import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button';
import npmIcon from '../../../assets/images/npm-logo.svg';
import linkedinIcon from '../../../assets/images/linkedin-logo.svg';
import githubIcon from '../../../assets/images/github-logo.svg';

const BannerHeader = styled.header`
  width: 100%;
  padding: 180px 0;
  position: relative;
  display: block;
  background-position: center center;
  background-size: cover;
  background-image: url(${props => props.backgroundBanner});

  .modal{
	width: 100%;
	height: 100%;
	background-color: #000;
	opacity: 0.8;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1
  }

  .content{
	z-index: 2;
	position: relative;  
  }

  h1{
	color: #fff;
	font-weight: normal;
	font-size: 32px;
  }

  .or{
	  color: #fff;
	  font-style: italic;
	  font-size: 17px;
	  padding: 20px 0;

	&__text{
		padding: 0 5px;
	}

	  hr{
		  display: inline-block;
		  height: 2px;
		  border: 0px;
		  width: 50px;
		  background-color: #fff;
		  opacity: 0.5;
		  margin: 3px;
	  }
  }

`;

const SocialNetwork = styled.ul`

	&{
		padding: 0;
		margin: 0;
	}

	li{
		list-style: none;
		display: inline-block;
		padding: 0;
		margin: 0px;
		text-align: center;
		width: 65px;

		img{
			width: 50px;
		}

		a{
			opacity: 1;
			-webkit-transition: opacity .3s ease-in-out;
  			transition: opacity .3s ease-in-out ;
		}

		a:hover{
			opacity: 0.5;
			-webkit-transition: opacity .3s ease-in-out;
  			transition: opacity .3s ease-in-out ;
		}
	}
`;

const socialNetworks = [
	{
		name: 'Linkedin',
		icon: linkedinIcon,
		link: 'https://www.linkedin.com/in/ot%C3%A1vio-sanchez/',
	},
	{
		name: 'GitHub',
		icon: githubIcon,
		link: 'https://github.com/otavio-sanchez',
	},
	{
		name: 'npm',
		icon: npmIcon,
		link: 'https://www.npmjs.com/~otavio-sanchez',
	},
];


const Banner = ({ textBanner, backgroundBanner }) => (
	<React.Fragment>

		<BannerHeader backgroundBanner={backgroundBanner}>
			<div className="modal" />
			<Grid fluid className="content">
				<Row center="xs">
					<Col xs={12}>
						<h1>
							{' '}
							{ textBanner }
							{' '}
						</h1>

						<Button>
							{
								'RESUMO'
							}
						</Button>

						<div className="or">
							<hr />
							<span className="or__text">ou</span>
							<hr />
						</div>

						<nav>
							<SocialNetwork>
								{
									socialNetworks.map(
										socialNetwork => (
											<li key={socialNetwork.name}>
												<a
													href={socialNetwork.link}
													title={socialNetwork.name}
													rel="noopener noreferrer"
													target="_blank"
												>
													<img
														src={socialNetwork.icon}
														title={socialNetwork.name}
														alt={socialNetwork.name}
													/>
												</a>

											</li>
										),
									)
								}
							</SocialNetwork>
						</nav>
					</Col>
				</Row>
			</Grid>


		</BannerHeader>
	</React.Fragment>
);


export default Banner;
