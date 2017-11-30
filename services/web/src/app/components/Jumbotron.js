// Libs
import React from 'react';
//CSS
import css from '../../static/css/innovation.css';

const Jumbotron = () => (
	<div className={[css.jumbotron,'jumbotron'].join(' ')}>
		<div className={[css.container,'container'].join(' ')}>
			<h2>Stay Connected</h2>
			<p>Receive weekly insights from industry insiders.</p>
			<a href="/" className={[css.btn,'btn',css['btn-join'],'btn-join'].join(' ')} rel="style" type="text/css">Join</a>
		</div>
	</div>
);

export default Jumbotron;
