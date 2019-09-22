import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Projects from './containers/Projects';
import About from './containers/About';
import Home from './containers/Home';
import Header from './containers/Header';
import Contact from './containers/Contact';


class App extends React.Component {
  render = () => {
    return (
      <HashRouter basename='/'>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route path="/" component={Home}/>
          </Switch>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;