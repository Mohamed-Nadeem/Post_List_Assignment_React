import React, { Component } from 'react';
import { render } from 'react-dom';
import TemperForntEnd from './temperFrontEnd';

class App extends Component {
  render() {
    return (
      <div>
        <div>
            <TemperForntEnd />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
