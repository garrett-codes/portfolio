import React from "react";
import Tilt from "react-tilt";

class ContactBody extends React.Component {
  state = {
    showEmail: false,
  };
  openGitHub = () => {
    // debugger
    let win = window.open("https://github.com/Ghalstein", "_blank");
    win.focus();
  };

  openYouTube = () => {
    // debugger
    let win = window.open("https://www.youtube.com/garretthalstein", "_blank");
    win.focus();
  };

  openEmail = () => {
    this.setState({ showEmail: !this.state.showEmail });
  };

  openLinkedIn = () => {
    let win = window.open(
      "https://www.linkedin.com/in/garretthalstein/",
      "_blank"
    );
    win.focus();
  };

  openMedium = () => {
    let win = window.open("https://medium.com/@ghalstein97", "_blank");
    win.focus();
  };

  render = () => {
    return (
      <div>
        <div className="contacts">
          <div className="contact-item" onClick={this.openGitHub}>
            <div className="img-div">
              <Tilt className="Tilt">
                <img className="icons" src={require(`../images/github.png`)} />
              </Tilt>
            </div>
            <div> Github </div>
          </div>
          <div className="contact-item" onClick={this.openLinkedIn}>
            <div className="img-div">
              <Tilt className="Tilt">
                <img
                  className="icons linkedIn"
                  src={require(`../images/linkedin.png`)}
                />
              </Tilt>
            </div>
            <div className="second-icon"> LinkedIn </div>
          </div>
          <div className="contact-item" onClick={this.openYouTube}>
            <div className="img-div">
              <Tilt className="Tilt">
                <img
                  className="icons linkedIn"
                  src={require(`../images/youtube.png`)}
                />
              </Tilt>
            </div>
            <div className="second-icon"> YouTube </div>
          </div>
        </div>
        <div className="contacts">
          <div className="contact-item" onClick={this.openMedium}>
            <div className="img-div">
              <Tilt className="Tilt">
                <img className="icons" src={require(`../images/medium.png`)} />
              </Tilt>
            </div>
            <div className="blog-icon"> Blog </div>
          </div>
          <a className="mail-to" href="mailto:ghalstein97@gmail.com?">
            <div className="contact-item">
              <div className="img-div">
                <Tilt className="Tilt">
                  <img className="icons" src={require(`../images/gmail.png`)} />
                </Tilt>
              </div>
              <div className="second-icon">Gmail </div>
            </div>
          </a>
        </div>
      </div>
    );
  };
}

export default ContactBody;
