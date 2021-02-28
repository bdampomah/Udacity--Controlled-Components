import React, { Component } from "react";
import "./App.css";
import logo from './logo.svg';

class App extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState(prevState => ({
      value
    }));
  };
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 1 - Controlled Component</p>
        </header>
        <main className="App-main">
          <div className="container">
            <input
              type="text"
              placeholder="Say Something"
              value={value}
              onChange={this.handleChange}
            />
            <p className="echo">Echo:</p>
            {value === "" ? (
              <p>This should mirror the text you typed into the input field.</p>
            ) : (
              <p>{value}</p>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
