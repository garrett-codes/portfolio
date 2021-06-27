import React from "react";
import Tilt from "react-tilt";
import Icon from "../components/Icon";
import Pdf from "../components/PDF";
import Bottom from "../components/Bottom";

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render = () => {
    return (
      <div className="about-container">
        <div className="about-me-top">
          <div className="about-me-with-pic">
            <div className="me-photo">
              <img className="me" src={require(`../images/me.JPG`)} />
            </div>
          </div>
          <div className="blurb-container">
            <Tilt className="skills-tilt">
              <h1 className="PageTitle about-me"> about me </h1>
            </Tilt>
            <div className="about-blurb">
              I'm a full-stack software engineer at IBM.
              <div className="about-info">
              I love solving problems. As soon as I discovered that software engineering would allow me to pursue my passion for problem solving, I was hooked.
              </div>
              <div className="about-info"> For my first professional contract, I was the lead developer of a technology-enabled biopharmaceutical company’s API. I had the opportunity to design and develop a scalable system with microservices and a serverless backend. Although I was a contract-to-hire, I received an offer from IBM for a full-time position to take ownership of key projects at the transaction processing facility.</div>
              <div className="about-info">
              At IBM, I have had the opportunity to lead several projects including the upgrade of the department’s console interface and the development of automotive scripts for improving workplace efficiency and customer satisfaction. Currently, I am a lead developer on a learning platform that provides our customers and new hires an intuitive interface with hands-on features to develop knowledge and skills for my department’s operating system.
              </div>
              <div className="about-info">Outside of the office, I manage my own YouTube channel to help other software developers navigate the industry by sharing my knowledge of computer science fundamentals. I have found that my channel allows me to give back to the developer community as a mentor, while simultaneously challenging me to keep my skills at their highest level.</div>
            </div>
            <Pdf />
          </div>
        </div>
        <div className="skills-about">
          <Tilt className="skills-tilt">
            <h1 className="skills-title">skills</h1>
          </Tilt>
          <div className="icons-container">
            <div className="stacks-container">
              backend
              <div className="stack-container">
                <Icon type="java" link={require(`../images/java.png`)} />
                <Icon type="python" link={require(`../images/python.png`)} />
                <Icon type="node" link={require(`../images/node.png`)} />
                <Icon type="ruby" link={require(`../images/ruby.png`)} />
                <Icon type="rails" link={require(`../images/rails.png`)} />
                <Icon type="git" link={require(`../images/git.png`)} />
                <Icon
                  type="postgresql"
                  link={require(`../images/postgresql.png`)}
                />
              </div>
              frontend
              <div className="stack-container">
                <Icon type="react" link={require(`../images/react.png`)} />
                <Icon type="d3" link={require(`../images/d3.png`)} />
                <Icon type="js" link={require(`../images/js.png`)} />
                <Icon type="css" link={require(`../images/css.png`)} />
                <Icon type="html" link={require(`../images/html.png`)} />
              </div>
            </div>
          </div>
        </div>
        <div className="skills-about">
          <Tilt className="skills-tilt">
            <h1 className="skills-title">interests</h1>
          </Tilt>
          <div className="interests-container">
            <ul className="interests">
              <li className="interest"> fitness</li>
              <li className="interest"> stocks</li>
              <li className="interest"> cooking</li>
              <li className="interest"> eating</li>
              <li className="interest"> basketball</li>
              <li className="interest"> ...coding</li>
            </ul>
          </div>
        </div>
        <Bottom />
      </div>
    );
  };
}

export default About;
