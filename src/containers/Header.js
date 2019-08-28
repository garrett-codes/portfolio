import React from 'react';
import Links from '../components/Links'


class Header extends React.Component {

	render = () => {
		return (
			<nav className="navbar">
				<span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
        </span>
				<Links />
			</nav>
		)
	}
}

export default Header;