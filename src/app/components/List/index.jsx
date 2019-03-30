import React from 'react';
import propTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const ListComponent = styled.ul`
	list-style: none;
	padding: 0;

	li{
		width: 48%;
		padding-right: 2%;
		display: inline-block;
	}

	.link{
		text-decoration: none;
		text-decoration: underline;
		transition: color 300ms ease-in-out;
		color: ${props => props.styled.main};
		font-size: 18px;
	}

	.link:hover{
		text-decoration: none;
		color: ${props => props.styled.alternative};
		transition: color 300ms ease-in-out;
	}
`;

const Item = styled.article`
	padding: 10px 0px;


`;

const List = ({
	data, header, date, url, type, theme,
}) => (
	<ListComponent styled={theme.colors}>
		{
			data && data.length !== 0
				? data.map(item => (
					<li key={item[header]}>
						<Item>
							<a
								href={item[url]}
								title={item[header]}
								rel="noopener noreferrer"
								target="_blank"
								className="link"
							>
								{item[header]}
							</a>
							<span>
								{' - '}
								{item[type]}
							</span>
							<div>
								{'Criado em '}
								{' '}
								{item[date] ? new Date(item[date]).toLocaleDateString('pt-BR') : '' }
							</div>
						</Item>
					</li>))
				: <li>Nenhum item encontrado.</li>
		}
	</ListComponent>
);

List.propTypes = {
	header: propTypes.string.isRequired,
	data: propTypes.instanceOf(Array).isRequired,
};

export default withTheme(List);
