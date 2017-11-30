// Libs
import React from 'react';
//CSS
import css from '../../static/css/innovation.css';

const Header = () => (
	<div className={[css.header,'header'].join(' ')}>
		<div className={[css.container,'container'].join(' ')}>
			<h1>INNOVATION CLOUD</h1>
			<p>CONNECT YOUR IDEAS GLOBALLY</p>
			<a href="/" className={[css.btn,'btn',css['btn-learnmore'],'btn-learnmore'].join(' ')} rel="style" type="text/css">Learn More</a>
		</div>
	</div>
);

export default Header;
