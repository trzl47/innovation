// Libs
import React from 'react';
//CSS
import css from './innovation.css';

const Nav = () => (
	<div className={[css.nav,'nav'].join(' ')}>
		<div className={[css.container,"container"].join(' ')}>
			<ul>
				<li><a href="">Register</a></li>
				<li><a href="">Schedule</a></li>
				<li><a href="">Sponsors</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Contact</a></li>
			</ul>
		</div>
	</div>
);

export default Nav;
