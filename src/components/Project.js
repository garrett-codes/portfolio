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
						<h3 className="video-tag">Facebook Clone (Furbook) - Built with React/Redux and a Rails API</h3>
							<ul className="description">
								<li>+ Developed a Rails API backend with endpoints for users, posts, comments, pictures, friendships and messages.</li>
								<li>+ Utilized JSON Web Tokens and local storage to store encrypted user information client-side and bcrypt server-side.</li>
								<li>+ Used Active Storage and Google Cloud Platform to upload and display pictures throughout the application.</li>
								<li>+ Managed state and user interactions with React and Redux.</li>
								<li>+ Implemented user interface with fully CSS styling.</li>

							</ul>
						<YouTube
			        videoId="8eRqKUlNYiA"
			        opts={this.ops}
			        onReady={this._onReady}
			      />
					</div>
					<div className="video">
						<h3 className="video-tag">Trello Clone (Chello) - Built with React and a Rails API</h3>
						<ul className="description">
							<li>+ Developed a Rails API backend with endpoints for users, projects, lists and tasks.</li>
							<li>+ Utilized JSON Web Tokens and local storage to store encrypted user information client-side and bcrypt server-side.</li>
							<li>+ Utilized components and their life cycles, props and states via React’s structural hierarchy.</li>
							<li>+ Implemented user interface with fully CSS styling.</li>
						</ul>
						<YouTube
			        videoId="vYR5io-r43Q"
			        opts={this.ops}
			        onReady={this._onReady}
			      />
					</div>
					<div className="video">
						<h3 className="video-tag">myStocks - Built with VanillaJS with a Rails Backend</h3>
						<ul className="description">
							<li>+ Developed a Rails API backend with endpoints for users, watchlists and stocks.</li>
							<li>+ Developed the frontend reactivity completely in Vanilla Javascript. </li>
							<li>+ Scraped a stock API to provide accurate real time data upon every stock requested.</li>
							<li>+ Implemented user interface with fully CSS styling.</li>
						</ul>
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