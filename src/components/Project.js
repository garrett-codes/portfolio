import React from 'react';
import Tilt from 'react-tilt';
import YouTube from 'react-youtube';

class Project extends React.Component {
	
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

	render = () => {
		// debugger
		return (
				<div className="video">
					<h3 className="video-tag">{this.props.title}</h3>
					<h4 className="title-description">{this.props.titleDescription}</h4>
						<ul className="description">
							{this.props.description.map(bullet => <li>{bullet}</li>)}
						</ul>
					<Tilt  className="tilt">
						<img onClick={() => this.openGitHub(this.props.github)} className="icon" src="https://i.dlpng.com/static/png/4033681_preview.png" />
					</Tilt>
					<YouTube
		        videoId={this.props.videoId}
		        opts={this.ops}
		        onReady={this._onReady}
		      />
				</div>
		)
	}
}

export default Project;