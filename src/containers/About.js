import React from 'react';
import Tilt from 'react-tilt';
import Icon from '../components/Icon';

class About extends React.Component {

	render = () => {
		return (
			<div>
				<div className="about-me-with-pic" >
					<img className="me" src="https://media.licdn.com/dms/image/C4E03AQH-D7QbgeY--w/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=i87RMu3CnhWXOzhfQkp7DLDCktL21ODLEbO-N0Ae28E"/>
					<Tilt >
						<h1 className="PageTitle about-me"> about me </h1>
					</Tilt>
				</div>
				<div className="about-blurb">
					I'm a fullstack developer from the Greater New York Area. 
					<div className="about-info">
						I have a passion for building, teaching and learning. Experience in Java, Ruby on Rails, JavaScript, React, Redux and a background in Computer Science and Chemistry. I discovered software development through my university classes and have enjoyed challenging myself with projects since. I enthusiastically bring strong skills in team-building, communication, debugging, data analysis and leadership that help progressive companies succeed. My strong background in STEM, along with my creativity, has led me to love computer science and building software.
					</div>
				</div>
				<div className="icons-container">
					<Icon link={"http://pluspng.com/img-png/java-png-java-png-clipart-png-image-200.png"}/>
					<Icon link={'http://pluspng.com/img-png/logo-javascript-png-javascript-tutorials-400.png'}/>
				</div>
			</div>
		)
	}
}

export default About;