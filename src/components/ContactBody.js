import React from 'react';

class ContactBody extends React.Component {

	render = () => {
		return (
			<div className="contact-info">
				<ul className="contacts">
					<div className="contact-item">Github</div>
					<div className="contact-item">Email</div>
					<div className="contact-item">LinkedIn</div>
				</ul>
			</div>
		)
	}
}

export default ContactBody;