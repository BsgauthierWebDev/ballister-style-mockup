import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/Landing/landing';
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
      </>
    )
  }
  
  render() {
    return (
      <div className = 'App'>
        <main className = 'app__main'>
          {this.renderMainRoutes()}
        </main>
        <footer id = 'footer'></footer>
      </div>
    );
  }
}