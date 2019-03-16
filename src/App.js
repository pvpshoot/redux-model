import "./App.css";

import React, { Component } from "react";

import UserSelector from "./models/UserModel.selector";
import { connect } from "react-redux";
import logo from "./logo.svg";

class App extends Component {
  render() {
    const { User, User2 } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <p>{User.combine}</p>
          <p>
            <input
              type="text"
              placeholder="ИМЯ"
              value={User.name}
              onChange={e => {
                User.actions.changeName(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="возраст"
              value={User.age}
              onChange={e => {
                User.actions.changeAge(e.target.value);
              }}
            />
          </p>
        </header>
        <header className="App-header">
          <p>{User2.combine}</p>
          <p>
            <input
              type="text"
              placeholder="ИМЯ"
              value={User2.name}
              onChange={e => {
                User2.actions.changeName(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="возраст"
              value={User2.age}
              onChange={e => {
                User2.actions.changeAge(e.target.value);
              }}
            />
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    User: state.User,
    User2: UserSelector(state)
  };
};
export default connect(mapStateToProps)(App);
