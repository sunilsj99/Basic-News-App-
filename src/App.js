import React, { Component } from 'react';
import NewsApp from './container/news';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header__background" />
        <h1 className="header__title">News App</h1>
        <NewsApp />
      </div>
    );
  }
}


export default App;
