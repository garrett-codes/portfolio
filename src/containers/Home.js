import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

class Home extends React.Component {

	render = () => {
		return (
			<div className="home-container">
				<div className="background-container">
					<div className="home-name">
						<Link to="/about"><h1 className="my-name">Garrett Halstein</h1></Link>
					</div>
					<img className="home-background" src={require(`../images/home-background.jpeg`)} />
				</div>
				<div className="typewriter"> 
					<Typed className="typewriter" style={{color: '#FFFFFF', fontSize: 64}}
		        strings={[
		          'Hello, welcome to my page.',
		          'Please explore my projects',
		          'Please explore my accomplishments.']}
		          typeSpeed={45}
		          backSpeed={30}
							>
		      </Typed>
				</div>
			</div>
		)
	}
}

export default Home;