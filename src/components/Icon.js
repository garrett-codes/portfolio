import React from 'react';
import Tilt from 'react-tilt';

class Icon extends React.Component {
	render = () => {
		return (
			<Tilt className="tech-icon-tilt">
				<img className={`tech-icon ${this.props.type}`} src={this.props.link} />
			</Tilt>
		)
	}
}

export default Icon;
