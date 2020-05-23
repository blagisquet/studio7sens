import React from 'react';

import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';

import '../../App.scss';

const Header = () => {
	return (
		<section className="hero gradientBg is-fullheight-with-navbar">
			<Navbar />
			<Home />
			<span id="studio"></span>
		</section>
	);
}
export default Header;
