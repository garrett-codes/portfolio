import React from 'react';
import Typed from 'react-typed';

class Home extends React.Component {

	render = () => {
		return (
			<div className="typewriter"> 
				<Typed className="typewriter" style={{color: '#FFFFFF', fontSize: 64}}
	        strings={[
	          'Hello, welcome to my page.',
	          'Please, explore my projects',
	          'Please, explore my accomplishments.']}
	          typeSpeed={45}
	          backSpeed={30}
						>
	      </Typed>
			</div>
		)
	}
}

export default Home;