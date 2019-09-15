import React from 'react';
import Tilt from 'react-tilt';


class Project extends React.Component {

	render = () => {
		return (
			<div>
				<div className="my-projects">
					<Tilt >
						<h1 className="PageTitle"> My Projects</h1>
					</Tilt>
				</div>
			</div>
		)
	}
}

export default Project;