import React from 'react';
import Links from '../components/Links'


class Header extends React.Component {

	render = () => {
		return (
			<nav className="navbar">
				<span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
				<Links />
			</nav>
		)
	}
}

export default Header;