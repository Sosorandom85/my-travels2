import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Travel
          destination="Orlando Wizarding World - "
          country="USA - "
          image="https://orlandoinformer.com/wp-content/uploads/photo-gallery/epa/early-park-admission-universal-wizarding-world-of-harry-potter-712-oi.JPG"
          distance="7 233 km"
        />
        <Travel
          destination="Disney Florida - "
          country="USA - "
          image="https://secure.cdn1.wdpromedia.com/resize/mwImage/2/1280/720/75/wdpromedia.disney.go.com/media/wdpro-assets/home/hpr/walt-disney-world-six-parks-uk-video-loop.jpg"
          distance="7 247 km"
        />
      </div>
    );
  }
}

export default App;
