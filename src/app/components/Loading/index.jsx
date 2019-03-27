import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const LoadingComponent = styled.div`
	.loading{
		text-align: center;
		padding: 10px 0;
	}
`;

const Loading = ({ children, on }) => (
	<LoadingComponent>
		{
			on ? <div className="loading">Carregando</div>
				: (

					<React.Fragment>{ children }</React.Fragment>

				)
		}


	</LoadingComponent>
);

Loading.propTypes = {
	on: propTypes.bool.isRequired,
	children: propTypes.element.isRequired,
};


export default Loading;
