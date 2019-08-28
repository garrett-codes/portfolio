import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
	render = () => {
		return (
			<ul class="main-nav" id="js-menu">
				<li><Link to="/" className="nav-links" style={{color: '#FFFFFF'}}>Home</Link></li>
			  <li><Link to='/projects' className="nav-links" style={{color: '#FFFFFF'}} >Projects</Link></li>
			  <li><Link to="/about" className="nav-links" style={{color: '#FFFFFF'}}>About</Link></li>
			  <li><Link to="/contact" className="nav-links" style={{color: '#FFFFFF'}}>Contact</Link></li>
			</ul>
		)
	}
}

export default Links;
