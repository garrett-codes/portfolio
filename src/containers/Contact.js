import React from 'react';
import ContactBody from '../components/ContactBody';
import Tilt from 'react-tilt';
import Bottom from '../components/Bottom';


class Contact extends React.Component {

	componentDidMount() {
	  window.scrollTo(0, 0)
	}
	
	render = () => {
		return (
			<div className="ContactPage">
				<div className="Connect">
					<Tilt className="contact-title">
						<h1 className="PageTitle"> connect with me</h1>
					</Tilt>
				</div>
				<ContactBody />
				<Bottom/>
			</div>
		)
	}
}

export default Contact;