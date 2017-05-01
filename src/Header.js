// Libs
import React from 'react';
//CSS
import css from './innovation.css';

const Header = () => (
	<div className={[css.header].join(' ')}>
		<div className={[css.container,"container"].join(' ')}>
			<h1>INNOVATION CLOUD</h1>
			<p>CONNECT YOUR IDEAS GLOBALLY</p>
			<a href="" className={[css.btn,"btn",css["btn-learnmore"]].join(' ')} rel="style" type="text/css">Learn More</a>
		</div>
	</div>
);

export default Header;