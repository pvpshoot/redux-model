import * as R from "ramda";

import UserModel from "./models/UserModel";
import { combineReducers } from "redux";

const user = { name: "mike", age: 30 };
const initialState = new UserModel(user);

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserModel.actionTypes.CHANGE_NAME: {
      return state.setName(action.name);
    }
    case UserModel.actionTypes.CHANGE_AGE: {
      return state.setAge(action.age);
    }
    default:
      return state;
  }
};

const nameLens = R.lensProp("name");
const ageLens = R.lensProp("age");

const userSelectorReducer = (state = user, action) => {
  switch (action.type) {
    case UserModel.actionTypes.CHANGE_NAME: {
      return R.set(nameLens, action.name, state);
    }
    case UserModel.actionTypes.CHANGE_AGE: {
      return R.set(ageLens, action.age, state);
    }
    default:
      return state;
  }
};

export default combineReducers({
  User: userReducer,
  UserSelector: userSelectorReducer
});
