import React from 'react';
import Tilt from 'react-tilt';

class About extends React.Component {

	render = () => {
		return (
			<div>
				<div className="about-me-with-pic" >
					<img className="me" src="https://media.licdn.com/dms/image/C4E03AQH-D7QbgeY--w/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=i87RMu3CnhWXOzhfQkp7DLDCktL21ODLEbO-N0Ae28E"/>
					<Tilt >
						<h1 className="PageTitle about-me"> About me </h1>
					</Tilt>
				</div>
				<div className="about-blurb">
					Hi. I am a Fullstack developer with a passion for building, teaching and learning. I have experience in Java, Ruby on Rails, JavaScript, React, Redux and a background in Chemistry and Quantitative Sciences. I discovered software development through my university classes and have enjoyed challenging myself with projects since. I love collaborating, analyzing data and taking on new challenges. 
				</div>
			</div>
		)
	}
}

export default About;