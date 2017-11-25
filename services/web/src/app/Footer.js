// Libs
import React from 'react';
//CSS
import css from './innovation.css';

const Footer = () => (
	<div className={[css.footer,'footer'].join(' ')}>
		<div className={[css.container,"container"].join(' ')}>
			<p> &copy; Innovation Cloud Conference</p>
		</div>
	</div>
);

export default Footer;
