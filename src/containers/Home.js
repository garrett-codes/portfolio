import React from 'react';
import Typed from 'react-typed';

class Home extends React.Component {

	render = () => {
		return (
			<div className="typewriter"> 
				<Typed style={{color: '#FFFFFF', fontSize: 64}}
	        strings={[
	          'Hello, wlecome',
	          'Hello, welcome to my page.',
	          'Please, explore my projects',
	          'Please, explore my accomplishments.']}
	          typeSpeed={40}
	          backSpeed={40}
						>
	        </Typed>
			</div>
		)
	}
}

export default Home;