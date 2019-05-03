import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
const csaLogo = require('./csa-logo.png');

class App extends Component {
  state = {
    hasHighTemp: false,
    name: '',
    temperature: null
  };

  issTempComponent;

  componentDidMount() {
    this.issTempComponent.addEventListener('hiTemp', e =>
      this.setState({
        hasHighTemp: e.detail.alert,
        name: e.name,
        temperature: e.temperature
      })
    );
  }

  componentWillUnmount() {
    this.issTempComponent.removeEventListener('hiTemp');
  }

  handleRef = component => {
    this.issTempComponent = component;
  };

  render() {
    return (
      <div className="App">
        {this.state.hasHighTemp && (
          <div
            style={{
              background: 'red',
              color: 'white',
              padding: '30px',
              fontSize: '40px',
              fontWeight: 'bold'
            }}
          >
            Ooops, High Temp Warning, sorry!
          </div>
        )}
        <header className="App-header">
          <div style={{ display: 'flex' }}>
            <img
              src={csaLogo}
              style={{
                height: '100px',
                width: '100px',
                padding: '15px'
              }}
            />
            <h1>CSA Mission Control</h1>
            <img
              src={logo}
              style={{
                height: '140px',
                width: '140px'
              }}
            />
          </div>
          <iss-temperature-gauge
            unit="celsius"
            station-component="discombobulator"
            ref={this.handleRef}
          />
        </header>
      </div>
    );
  }
}

export default App;
