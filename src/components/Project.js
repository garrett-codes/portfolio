import React from 'react';
import Tilt from 'react-tilt';
import YouTube from 'react-youtube';

class Project extends React.Component {
	
	opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

	render = () => {
		return (
			<div>
				<div className="my-projects">
					<div className="title">
						<Tilt >
							<h1 className="PageTitle"> My Projects</h1>
						</Tilt>
					</div>
					<div className="video">
						<h3 className="video-tag">myStocks - Built on VanillaJS with a Rails Backend</h3>
						<YouTube
			        videoId="FD5SZM5NosQ"
			        opts={this.ops}
			        onReady={this._onReady}
			      />
					</div>
				</div>
			</div>
		)
	}
}

export default Project;