import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/Landing/landing';
import About from './components/About/about';
import Nav from './components/Nav/nav';
import './App.css';

export default class App extends Component {

  renderMainRoutes() {
    return (
      <>
        <Route
          exact
          path = '/'
          component = {LandingPage}
        />
        <Route
          path = '/about'
          component = {About}
        />
      </>
    )
  }
  
  render() {
    return (
      <div className = 'App'>
        <Nav />
        <main className = 'app__main'>
          {this.renderMainRoutes()}
        </main>
        <footer id = 'footer'></footer>
      </div>
    );
  }
}