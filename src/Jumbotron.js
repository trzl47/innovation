// Libs
import React from 'react';
//CSS
import css from './innovation.css';

const Jumbotron = () => (
	<div className={[css.jumbotron].join(' ')}>
		<div className={[css.container,"container"].join(' ')}>
			<h2>Stay Connected</h2>
			<p>Receive weekly insights from industry insiders.</p>
			<a href="" className={[css.btn,"btn",css["btn-join"]].join(' ')} rel="style" type="text/css">Join</a>
		</div>
	</div>
);

export default Jumbotron;
