import React, { Component } from 'react';
import NewsApp from './container/news';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={header}>News App</h1>
        <NewsApp />
      </div>
    );
  }
}

const header = {
  textAlign: 'center',
  color: 'blue'
};

export default App;
