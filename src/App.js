import "./App.css";

import React, { Component } from "react";

import { connect } from "react-redux";
import logo from "./logo.svg";

class App extends Component {
  render() {
    const { User } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{User.combine}</p>
          <p>
            <input
              type="text"
              placeholder="ИМЯ"
              onChange={e => {
                User.actions.changeName(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="возраст"
              onChange={e => {
                User.actions.changeAge(e.target.value);
              }}
            />
          </p>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    User: state.User
  };
};
export default connect(mapStateToProps)(App);
