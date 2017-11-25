// Components
import Innovation from '../app/Innovation.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: Innovation,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};