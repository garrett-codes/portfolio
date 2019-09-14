import React from 'react';

class ContactBody extends React.Component {

	state = {
		showEmail: false
	}

	openGitHub = () => {
		// debugger
	  var win = window.open("https://github.com/Ghalstein", '_blank');
	  win.focus();
	}

	openEmail = () => {
		this.setState({showEmail: !this.state.showEmail})
	}

	render = () => {
		return (
			<div className="contact-info">
				<ul className="contacts">
					<div className="contact-item" onClick={this.openGitHub}>
						<img className="icons" src="https://i.dlpng.com/static/png/4033681_preview.png" />
						Github
						</div>
					<a className="mail-to" href="mailto:ghalstein97@gmail.com?">
						<div className="contact-item">
							<img className="icons" src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png" />
							Email: ghalstein97@gmail.com		
						</div>
					</a>
					<div className="contact-item">
						<img className="icons" src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png" />
						LinkedIn
					</div>
					<div className="contact-item">
						<img className="icons" src="https://www.stickpng.com/assets/images/5841c47ba6515b1e0ad75aa3.png" />
						Medium
					</div>
				</ul>
			</div>
		)
	}
}


export default ContactBody;