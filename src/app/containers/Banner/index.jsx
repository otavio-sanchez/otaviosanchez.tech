/* eslint-disabled */
import React, { Component } from 'react';
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

const Terminal = styled.div`
		.hidden {
			opacity:0;
		}

		&{
			font-size:2em;
			text-align:center;
			height:60px;
			width:100%;
			display:block;
			position:relative;
			color:white;
			top:0;
			bottom:0;
			left:0;
			right:0;
			margin:auto;
		}

		.terminal-cursor  {
			display:inline-block;
			position:relative;
			top:-0.1em;
			left:3px;
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


class Banner extends Component {
	componentDidMount() {
		const { textBanner } = this.props;


		this.terminal(textBanner, ['#f04', '#fff']);
	}

	terminal(words, colors = ['#fff']) {
		let visible = true;
		const { cursor } = this;
		let letterCount = 1;
		let x = 1;
		let waiting = false;
		const target = this.text;
		target.setAttribute('style', `color:${colors[0]}`);
		window.setInterval(() => {
			if (letterCount === 0 && waiting === false) {
				waiting = true;
				target.innerHTML = words[0].substring(0, letterCount);
				window.setTimeout(() => {
					const usedColor = colors.shift();
					colors.push(usedColor);
					const usedWord = words.shift();
					words.push(usedWord);
					x = 1;
					target.setAttribute('style', `color:${colors[0]}`);
					letterCount += x;
					waiting = false;
				}, 1000);
			} else if (letterCount === words[0].length + 1 && waiting === false) {
				waiting = true;
				window.setTimeout(() => {
					x = -1;
					letterCount += x;
					waiting = false;
				}, 1000);
			} else if (waiting === false) {
				target.innerHTML = words[0].substring(0, letterCount);
				letterCount += x;
			}
		}, 120);
		window.setInterval(() => {
			if (visible) {
				cursor.className = 'terminal-cursor hidden';
				visible = false;
			} else {
				cursor.className = 'terminal-cursor';

				visible = true;
			}
		}, 500);
	}

	render() {
		const { backgroundBanner } = this.props;
		return (
			<React.Fragment>


				<BannerHeader backgroundBanner={backgroundBanner}>
					<div className="modal" />
					<Grid fluid className="content">
						<Row center="xs">

							<Col xs={12}>
								<Terminal>
									<span id="text" ref={(ref) => { this.text = ref; }} />
									<div className="terminal-cursor" id="cursor" ref={(ref) => { this.cursor = ref; }}>|</div>
								</Terminal>
							</Col>
							<Col xs={12}>
								<Button onClick={() => {}}>
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
	}
}


export default Banner;
