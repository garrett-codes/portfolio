import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
	render = () => {
		return (
			<div class="main-nav" id="js-menu">
				<div className="home-list-item"><Link to="/" className="nav-links home-link" style={{color: '#FFFFFF'}}>Home</Link></div>
			  <div className="other-links ">
				  <div className="nav-links"><Link to='/projects' className="other-link" style={{color: '#FFFFFF'}} >Projects</Link></div>
				  <div className="nav-links"><Link to="/about" className="other-link" style={{color: '#FFFFFF'}}>About</Link></div>
				  <div className="nav-links"><Link to="/contact" className="other-link" style={{color: '#FFFFFF'}}>Contact</Link></div>
				</div>
			</div>
		)
	}
}

export default Links;
