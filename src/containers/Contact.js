import React from 'react';
import ContactBody from '../components/ContactBody';
import Tilt from 'react-tilt';


class Contact extends React.Component {

	render = () => {
		return (
			<div className="ContactPage">
				<div className="Connect">
					<Tilt className="contact-title">
						<h1 className="PageTitle"> connect with me</h1>
					</Tilt>
				</div>
				<ContactBody />
			</div>
		)
	}
}

export default Contact;