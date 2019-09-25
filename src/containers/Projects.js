import React from 'react';
import Tilt from 'react-tilt';
import Project from '../components/Project';
import Bottom from '../components/Bottom';

class Projects extends React.Component {
	
	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render = () => {
		return (
			<div className="my-projects">
				<div className="projects-title">
					<Tilt className="title-tilt">
						<h1 className="PageTitle"> projects</h1>
					</Tilt>
				</div>
				<div className="projects">
					<Project 
						title={"Furbook"}
						titleDescription={"Facebook Clone"}
						description={["+ Developed a Rails API backend with endpoints for users, posts, comments, pictures, friendships and messages.",
						"+ Utilized JSON Web Tokens and local storage to store encrypted user information client-side and bcrypt server-side.",
						"+ Used Active Storage, Google Cloud Platform and web services to upload and display media throughout the application.",
						"+ Managed state and user experience with React and Redux for scalability.",
						"+ Implemented the user interface with fully CSS styling."]}
						github={'furbook-frontend'}
						videoId={"8eRqKUlNYiA"}
						image='Furbook-photo.png'
					/>
					<Project 
						title={"Chello"}
						titleDescription={"Trello Clone"}
						description={["+ Developed a Rails API backend with endpoints for users, projects, lists and tasks.",
						"+ Utilized JSON Web Tokens and local storage to store encrypted user information client-side and bcrypt server-side.",
						"+ Utilized components and their life cycles, props and states via React’s structural hierarchy for scalability.",
						"+ Managed state and user experience with React and Redux for scalability.",
						"+ Implemented the user interface with fully CSS styling."]}
						github={'tGRAH-front-end'}
						videoId={"vYR5io-r43Q"}
						image='Chello-photo.png'
					/>
					<Project 
						title={"myStocks"}
						titleDescription={"Stock Tracker"}
						description={["+ Developed a Rails API backend with endpoints for users, watchlists and stocks.",
						"+ Developed the frontend reactivity and user experience completely in vanilla Javascript.",
						"+ Scraped a stock API to provide accurate real time data upon every stock requested.",
						"+ Implemented the user interface with fully CSS styling."
						]}
						github={'Stocks'}
						videoId={"FD5SZM5NosQ"}
						image={'myStocks-photo.png'}
					/>
				</div>
				<Bottom />
			</div>
		)
	}
}

export default Projects;