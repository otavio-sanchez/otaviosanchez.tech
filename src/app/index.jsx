import 'normalize.css';
import React from 'react';

import ReactGA from 'react-ga';
import StyleComponent from './components/StyleComponent';
import Main from './main';
import routes from '../routes';
import Header from './components/Header';
import Footer from './components/Footer';

ReactGA.initialize(process.env.REACT_APP_GOOGLE);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
	const nameProject = 'Otávio Sanchez';
	const subTitle = 'Desenvolvedor Full-Stack';
	return (
		<StyleComponent>
			{
				console.log(process.env.REACT_APP_GOOGLE)
			}
			<Header pages={routes} title={nameProject} subTitle={subTitle} />
			<Main routes={routes} />
			<Footer title={nameProject} />
		</StyleComponent>
	);
};

export default App;
