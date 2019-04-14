import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
  }

  onBackButtonClicked(e) {
    // Go back to the previous page
    console.log("going back");
  } 
  render() {
    return (
      <div className="App">
        <Header onBackButtonClicked={this.onBackButtonClicked}></Header>
      </div>
    );
  }
}

export default App;
