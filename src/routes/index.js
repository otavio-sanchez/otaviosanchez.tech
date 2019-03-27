import Home from '../app/pages/home';
import About from '../app/pages/about';

export default [
	{
		path: '/',
		exact: true,
		component: Home,
		title: 'Home',
	},
	{
		path: '/about',
		exact: false,
		component: About,
		title: 'About',
	}];
