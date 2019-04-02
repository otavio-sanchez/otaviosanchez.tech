import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '../../../assets/images/menu-open.svg';
import MenuClosedIcon from '../../../assets/images/menu-closed.svg';

const HeaderMenu = styled.header`
  text-align: center;
  -moz-transition: all .6s ease-in-out;
  -webkit-transition: all .6s ease-in-out;
  background-color: rgba(0, 0, 0, 0);
  height: ${props => props.style.background.height};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all .6s ease-in-out;
  width: initial;
  z-index: 1001;
  max-width: 1024px;
  margin: auto;
  
  a{
	  text-decoration: none;
  }

  .menu-active{
	transition: all .6s ease-in-out;
	color:  ${props => props.style.font.color} !important;
  }

  .logoImage{
	font-size: 38px;
	line-height: 37px;
	margin-right: 8px;

	.sides{
		color: ${props => props.style.font.color};
	}

	.middle{
			padding: 0 5px;
			color: #fff;
	}
  }

  .logo{
		color: ${props => props.style.font.color};
		font-family: ${props => props.style.font.family};
		font-size: ${props => props.style.font.size};
		font-weight: 500;
		margin: 0px;
		letter-spacing: 2px;


		&__sub{
				color: #fff;
				font-family: ${props => props.style.font.family};
				font-size: 12px;
				font-weight: 500;
				margin: 0px;
				letter-spacing: 2px;
		}

		
  }

  @media (max-width: 620px){
	.logo{
		font-size: 19px;


		&__sub{
				font-size: 10px;
		}
  }

  .logoImage{
	font-size: 30px;
	line-height: 37px;
  }
  }

  
  > div{
	  height: 100%;
  }

  > div > div{
	  height: 100%;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
  float: right;
  transition: all .6s ease-in-out;
`;

const Menu = styled.nav`
	background-color: ${props => props.style.background.color};
	font-size: ${props => props.style.font.size};
	color: ${props => props.style.font.color};
	border-left: 1px #ccc solid;
	display: block;
	height: 100vh;
	padding: 20px 0;
	position: fixed;
	right:  ${props => (props.open ? '0px' : '-100%')};
	min-width: 320px;
	z-index: 1000;
	transition: all  0.5s ease-in-out;
  
  @media (max-width: 620px){
	&{
		width: 100%;
	}
  }


  ul{
	padding: 0px;
  }

  ul li{
	list-style: none;
	padding: 20px 0;
	text-align: center;
  }

  .link{
	text-decoration: none;
	padding: 20px 0;
	color: ${props => props.style.font.color};
	transition: color 300ms ease-in-out;
  }

  .link:hover{
	text-decoration: none;
	color: ${props => props.style.font.colorHover};
  }


`;

const Overlay = styled.div`
  background-color: #333;
  opacity: ${props => (props.open ? '0.3' : '0')};
  z-index: ${props => (props.open ? '999' : '-999')};
  position: fixed;
  width: 100%;
  height: 100%;
  transition: all  300ms ease-out;
`;


class Header extends Component {
	state = {
		open: false,
	}


	componentWillReceiveProps() {
		const { pages, title } = this.props;

		const currentPage = pages.filter(page => this.getLocationPage(page));

		document.title = `${title} - ${currentPage.length !== 0 ? currentPage[0].title : ''}`;
	}

	getLocationPage = (page) => {
		const { history } = this.props;

		const { location } = history;

		return page.path === location.pathname && page.title;
	}

	onClickHandler = () => {
		const { open } = this.state;
		this.setState({
			open: !open,
		});
	}

	render() {
		const {
			pages, theme, title, subTitle,
		} = this.props;

		const { open } = this.state;

		return (
			<header>
				<HeaderMenu style={theme.header}>

					<Grid fluid>
						<Row middle="xs">
							<Col xs={10}>
								<Grid fluid>
									<Row start="xs">
										<Col xs={12}>
											<Grid fluid>
												<Row start="xs">
													<Col>
														<a href="http://otaviosanchez.tech">
															<div className="logoImage">
																<span className="sides">
																	{'{'}
																</span>
																<span className={`middle ${open ? 'menu-active' : ''}`}>
																	{':'}
																</span>
																<span className="sides">
																	{'}'}
																</span>
															</div>
														</a>
													</Col>
													<Col>
														<a href="http://otaviosanchez.tech">
															<h1 className="logo">{title}</h1>
															<h2 className={`logo__sub ${open ? 'menu-active' : ''}`}>
																{subTitle}
																{' '}
															</h2>
														</a>
													</Col>

												</Row>
											</Grid>
										</Col>
									</Row>
								</Grid>
							</Col>
							<Col xs={2}>
								<Grid fluid>
									<Row end="xs">
										<Col xs={12}>
											{
												open ? <Icon src={MenuClosedIcon} title="abrir" alt="abrir" onClick={this.onClickHandler} />
													: <Icon src={MenuOpenIcon} title="fechar" alt="fechar" onClick={this.onClickHandler} />

											}
										</Col>
									</Row>
								</Grid>
							</Col>
						</Row>
					</Grid>

				</HeaderMenu>
				<Menu style={theme.menu} open={open}>
					<ul>
						{
							pages.map(page => (
								<li key={page.path}>
									<Link className="link" to={page.path} onClick={this.onClickHandler}>{page.title}</Link>
								</li>
							))
						}
					</ul>
				</Menu>
				<Overlay open={open} />
			</header>
		);
	}
}

Header.propTypes = {
	title: propTypes.string,
	theme: propTypes.instanceOf(Object).isRequired,
	pages: propTypes.instanceOf(Array).isRequired,
};

Header.defaultProps = {
	title: 'Boilerplate',
};

export default withRouter(withTheme(Header));
