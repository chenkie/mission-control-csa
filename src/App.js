import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    hasHighTemp: false
  };

  component;

  componentDidMount() {
    this.component.addEventListener('hiTemp', e =>
      this.setState({ hasHighTemp: true })
    );
  }

  componentWillUnmount() {
    this.component.addEventListener('hiTemp');
  }

  handleRef = component => {
    this.component = component;
  };

  render() {
    return (
      <div className="App">
        {this.state.hasHighTemp && (
          <div style={{ background: 'red', color: 'white' }}>High Temp!!!</div>
        )}
        <header className="App-header">
          <iss-temperature-gauge
            unit="fahrenheit"
            station-component="discombobulator"
            width="300"
            height="500"
            ref={this.handleRef}
          />
        </header>
      </div>
    );
  }
}

export default App;
