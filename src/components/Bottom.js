import React from 'react';

class Bottom extends React.Component {
	render = () => {
		return (
			<div className="bottom-container">
				<div className="built-by">
					Built in React
				</div>
				<div className="built-by">
					Designed in HTML5/CSS3
				</div>
				<div className="by-me">
					By Garrett Halstein
				</div>
			</div>
		)
	}
}

export default Bottom;
