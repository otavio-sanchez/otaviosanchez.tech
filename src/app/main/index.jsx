import { Route, Switch } from 'react-router';
import propTypes from 'prop-types';
import React from 'react';

const Main = (props) => {
	const { routes } = props;
	return (
		<main>
			<Switch>
				{
					routes.map(route => (
						<Route {...route} key={route.path} />
					))
				}
			</Switch>
		</main>
	);
};

Main.prototype = {
	routes: propTypes.object.isRequired,
};

export default Main;
