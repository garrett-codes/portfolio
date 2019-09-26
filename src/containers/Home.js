import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

class Home extends React.Component {

	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	state = {
		explore: false
	}

	displayButton = () => {
		this.setState({explore: true})
	}

	render = () => {
		setTimeout(this.displayButton, 7000);
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
					<Typed className="writer" style={{color: '#FFFFFF', fontSize: 64}}
		        strings={[
		          'Hello.',
		          'Welcome to my page.',
		          'Please check out my projects.']}
		          typeSpeed={45}
		          backSpeed={30}
							>
		      </Typed>
		      {this.state.explore ? <Link to="/projects"><button className="explore">explore</button></Link> : null}
				</div>
			</div>
		)
	}
}

export default Home;