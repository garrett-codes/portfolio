import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import WaterWave from 'react-water-wave';

class Home extends React.Component {

	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render = () => {
		return (
			<div className="home-container">
				<div className="background-container">
					<div className="home-name">
						<Link to="/about"><h1 className="my-name">Garrett Halstein</h1></Link>
						<h1 className="software-developer">software developer</h1>
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