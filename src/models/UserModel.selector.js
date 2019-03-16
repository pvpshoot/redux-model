import * as R from "ramda";

import { createSelector } from "reselect";
import { store } from "../index";

const nameLens = R.lensProp("name");
const ageLens = R.lensProp("age");

class User {
  static of(value) {
    return new User(value);
  }

  static actionTypes = {
    CHANGE_NAME: "CHANGE_NAME",
    CHANGE_AGE: "CHANGE_AGE"
  };
  constructor(value) {
    this.value = value;
  }

  get name() {
    return this.value.name;
  }
  get age() {
    return this.value.age;
  }
  get combine() {
    return `${this.value.name} - ${this.value.age}`;
  }

  setName(name) {
    const newValue = R.set(nameLens, name, this.value);
    return this.of(newValue);
  }
  setAge(age) {
    const newValue = R.set(ageLens, age, this.value);
    return this.of(newValue);
  }

  actions = {
    changeName(name) {
      store.dispatch({ type: User.actionTypes.CHANGE_NAME, name });
    },
    changeAge(age) {
      store.dispatch({ type: User.actionTypes.CHANGE_AGE, age });
    }
  };
}

export default createSelector(
  R.prop("UserSelector"),
  User.of
);
