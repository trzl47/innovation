// Libs
import React from 'react';
//CSS
import css from './innovation.css';

const Main = () => (
	<div className={[css.main].join(' ')}>
		<div className={[css.container,"container"].join(' ')}>
			<img alt='' role='presentation' src={require("./assets/cloud.svg")} height="128" width="196"/>
			<h2>The Innovation Cloud Conference</h2>
			<p>Connect with the best minds across a wide range of industries to share ideas and brainstorm new solutions to challenging problems.</p>
			<p>Hear industry leaders talk about what worked (and what didn't) so that you can save time on your most challenging projects.</p>
			<p>Learn about the latest research and technologies that you can use immediately to invent the future.</p>
		</div>
	</div>
);

export default Main;
