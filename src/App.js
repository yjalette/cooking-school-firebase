import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navigation from './components/nav/Navigation';
import Registration from './components/auth/Registration';
import HomePage from './components/homepage/HomePage';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ProjectsView from './components/projects/ProjectsView';
import CreateProject from './components/projects/CreateProject';
import CreatePost from './components/posts/CreatePost';
import Profile from './components/users/Profile';
import Test from './components/test/Test';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/registration" component={Registration} />
            <Route path="/classes" component={ProjectsView} />
            <Route path="/create-class" component={CreateProject} />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/user-profile" component={Profile} />
            <Route path="/contact" component={Contact} />
            <Route path="/test" component={Test} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
