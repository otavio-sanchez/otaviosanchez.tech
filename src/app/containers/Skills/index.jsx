import React from 'react';
import styled from 'styled-components';

const SkillsList = styled.ul`

	width: 100%;
	padding: 0;
	margin: 0;

	li{
		width: 96%;
		background-color: #eee;
		position: relative;
		list-style: none;
		text-align: left;
		padding: 1.8%;
		display: block;
		margin-bottom: 2%;

		.skill{
			position: relative;
			z-index: 3;
			font-size: 13px;
			line-height: 12px;
			color: #fff;
		}
	}
`;

const Bar = styled.div`
	width: ${props => props.percent}%;
	background-color: #f04;
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	transition: all  0.5s ease-in-out;

	&:hover{
		width: 100%;
		transition: all  0.5s ease-in-out;
		background-color: #393E46;
	}
	
`;


const Title = styled.h2`
	margin: 10px 0;
	font-size: 24px;
	text-align: left;
`;

const Skills = ({ list }) => (
	<React.Fragment>

		<Title>
			{'Principais Skills'}
		</Title>

		<SkillsList>
			{
				list.map(item => (
					<li>
						<div className="skill">
							{' '}
							{ item.skill }
						</div>

						<Bar percent={item.percent} />

					</li>
				))
			}
		</SkillsList>

	</React.Fragment>
);


export default Skills;
