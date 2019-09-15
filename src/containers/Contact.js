import React from 'react';
import ContactBody from '../components/ContactBody';
import Tilt from 'react-tilt';


class Contact extends React.Component {

	render = () => {
		return (
			<div className="ContactPage">
				<div className="Connect">
					<Tilt>
						<h1 className="PageTitle"> Connect With Me</h1>
					</Tilt>
				</div>
				<ContactBody />
			</div>
		)
	}
}

export default Contact;