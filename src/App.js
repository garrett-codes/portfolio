import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Projects from './containers/Projects';
import About from './components/About';
import Home from './containers/Home';
import Header from './containers/Header';


class App extends React.Component {
  render = () => {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;