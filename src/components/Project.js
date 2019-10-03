import React from 'react';
import Tilt from 'react-tilt';
import YouTube from 'react-youtube';

class Project extends React.Component {
  
  state = {
    front: true
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  ops = {
    width: '300vw',
    height: '200vh',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }

  openGitHub = (link) => {
    // debugger
    let win = window.open(`https://github.com/Ghalstein/${link}`, '_blank');
    win.focus();
  }

  openYoutube = (link) => {
    // debugger
    let win = window.open(`https://www.youtube.com/watch?v=${link}`, '_blank');
    win.focus();
  }

  openApp = (link) => {
    // debugger
    let win = window.open(link, '_blank');
    win.focus();
  }

  handleToggle = () => {
    this.setState({front: !this.state.front})
  }

  render = () => {
    // debugger
    return (
        <div className="video">
          {this.state.front ?
            <div className="front-card">
              <img onClick={this.handleToggle} className="project-image" src={require(`../images/${this.props.image}`)} alt="project" />
              <h3 onClick={this.handleToggle} className="video-tag">{this.props.title}</h3>
              <h4 onClick={this.handleToggle} className="title-description">{this.props.titleDescription}</h4>
            </div>
          :
            <div className="back-card">
              <div className="back-card-title">
                <h2 className="project-about" onClick={this.handleToggle}>About</h2>
                <img 
                  onClick={this.handleToggle} 
                  className="close-out" src="https://icons-for-free.com/iconfiles/png/512/close+minimize+minus+remove+icon-1320085940035145098.png"
                />
              </div>
              <div className="description">
                {this.props.description.map(bullet => <li className="project-description">{bullet}</li>)}
              </div>
              <div className="project-links" >
                <Tilt className="tilt">
                  <img 
                    onClick={() => this.openGitHub(this.props.github)} 
                    className="project-icon" 
                    alt="github repository"
                    src="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png" 
                  />
                </Tilt>
                <Tilt className="tilt">
                  <img 
                    onClick={() => this.openYoutube(this.props.videoId)} 
                    className="project-icon" 
                    alt="demo video"
                    src="https://www.sccpre.cat/mypng/detail/296-2964019_black-youtube-logo-transparent-logo-youtube-play-png.png" 
                  />
                </Tilt>
                {this.props.hasOwnProperty("app") ?
                  <Tilt>
                    <img 
                      onClick={() => this.openApp(this.props.app)} 
                      className="project-icon" 
                      src="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png" 
                      alt="live application"
                      onMouseEnter={this.someHandler}
                      onMouseLeave={this.someOtherHandler}
                    />
                  </Tilt>
                :
                  null
                }
              </div>
            </div>
          }
        </div>
    )
  }
}

export default Project;