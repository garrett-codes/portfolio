import React from 'react';

class ProjectModule extends React.Component {
	render = () => {
		return (
			<div className="video">
				<h3 className="video-tag">Facebook Clone (Furbook) - Built with React/Redux and a Rails API</h3>
					<ul className="description">
						<li>+ Developed a Rails API backend with endpoints for users, posts, comments, pictures, friendships and messages.</li>
						<li>+ Utilized JSON Web Tokens and local storage to store encrypted user information client-side and bcrypt server-side.</li>
						<li>+ Used Active Storage and Google Cloud Platform to upload and display pictures throughout the application.</li>
						<li>+ Managed state and user interactions with React and Redux.</li>
						<li>+ Implemented user interface with fully CSS styling.</li>

					</ul>
				<Tilt  className="tilt">
					<img onClick={() => this.openGitHub('furbook-frontend')} className="icon" src="https://i.dlpng.com/static/png/4033681_preview.png" />
				</Tilt>
				<YouTube
	        videoId="8eRqKUlNYiA"
	        opts={this.ops}
	        onReady={this._onReady}
	      />
			</div>
		)
	}
}

export default ProjectModule;
