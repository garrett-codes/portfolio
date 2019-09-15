import React from 'react';
import ContactBody from '../components/ContactBody';


class Contact extends React.Component {

	render = () => {
		return (
			<div>
				<h1 className="PageTitle"> Connect With Me</h1>
				<ContactBody />
			</div>
		)
	}
}

export default Contact;