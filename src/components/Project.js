import React from 'react';
import Tilt from 'react-tilt';
import YouTube from 'react-youtube';

class Project extends React.Component {
	
	state = {
		front: true
	}

	ops = {
    width: '300vw',
    height: '200vh',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }

  openGitHub = (link) => {
		// debugger
	  let win = window.open(`https://github.com/Ghalstein/${link}`, '_blank');
	  win.focus();
	}

	handleToggle = () => {
		this.setState({front: !this.state.front})
	}

	render = () => {
		// debugger
		return (
				<div className="video">
					{this.state.front ?
						<div className="front-card">
							<img onClick={this.handleToggle} className="project-image" src={require(`../images/${this.props.image}`)} alt="project" />
							<h3 onClick={this.handleToggle} className="video-tag">{this.props.title}</h3>
							<h4 onClick={this.handleToggle} className="title-description">{this.props.titleDescription}</h4>

							<Tilt className="tilt">
								<img onClick={() => this.openGitHub(this.props.github)} className="icon" src="https://i.dlpng.com/static/png/4033681_preview.png" />
							</Tilt>
						</div>
					:
						<div className="back-card">
							<div className="back-card-title">
								<h3 className="project-about" onClick={this.handleToggle}>About</h3>
								<h3 onClick={this.handleToggle} className="close-out">-</h3>
							</div>
							<ul className="description">
								{this.props.description.map(bullet => <li>{bullet}</li>)}
							</ul>
						</div>
					}
				</div>
		)
	}
}

export default Project;