import React from 'react';
import Tilt from 'react-tilt';
import Icon from '../components/Icon';
import Pdf from '../components/PDF';

class About extends React.Component {

	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render = () => {
		return (
			<div>
				<div className="about-me-top">
					<div className="about-me-with-pic" >
						<div className="me-photo">
							<img className="me" src={require(`../images/me.JPG`)}/>
						</div>
					</div>
					<div className="blurb-container">
						<Tilt className="skills-tilt">
							<h1 className="PageTitle about-me"> about me </h1>
						</Tilt>
						<div className="about-blurb">
							I'm a fullstack developer from the greater New York area. 
							<div className="about-info">
								I have a passion for building, teaching and learning. I'm experienced in Java, Ruby on Rails, JavaScript, React, Redux and have a background in Computer Science and Chemistry. I discovered software development through my university classes and have enjoyed challenging myself with projects since. 
							</div>
							<div className="about-info">
								I enthusiastically bring strong skills in team-building, communication, debugging, data analysis and leadership that help progressive companies succeed. My strong background in STEM, along with my creativity, has led me to love computer science and building software.
							</div>
						</div>
						<Pdf />
					</div>
				</div>
				<div className="skills-about">
					<Tilt className="skills-tilt">
						<h1 className="skills-title">skills</h1>
					</Tilt>
					<div className="icons-container">
						<div className="stacks-container">
							backend
							<div className="stack-container">
								<Icon link={"http://pluspng.com/img-png/java-png-java-png-clipart-png-image-200.png"}/>
								<Icon link={'https://fuzati.com/wp-content/uploads/2016/12/Ruby-Logo.png'} />
								<Icon link={'https://www.skysilk.com/res/default/default/public/images/cloud-lp/tech-landing/ruby/ruby.png'} />
								<Icon link={'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png'} />
								<Icon link={'https://www.enterprisedb.com/sites/default/files/logo-postgresql-700x500.png'} />
							</div>
							frontend
							<div className="stack-container">
								<Icon link={'http://pluspng.com/img-png/logo-javascript-png-javascript-tutorials-400.png'}/>
								<Icon link={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'}/>
								<Icon link={'https://fuzati.com/wp-content/uploads/2016/12/CSS-Logo.png'}/>
								<Icon link={'https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png'}/>
							</div>
						</div>
					</div>
				</div>
				<div className="skills-about">
					<Tilt className="skills-tilt">
						<h1 className="skills-title">interests</h1>
					</Tilt>
					<div className="interests-container">
						<ul className="interests">
							<li className="interest"> fitness</li>
							<li className="interest"> stocks</li>
							<li className="interest"> cooking</li>
							<li className="interest"> eating</li>
							<li className="interest"> volunteering</li>
							<li className="interest"> basketball</li>
							<li className="interest"> ...coding</li>
							
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default About;