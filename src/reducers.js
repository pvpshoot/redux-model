import * as R from "ramda";

import UserModel from "./models/UserModel";
import { combineReducers } from "redux";

const initialState = new UserModel({ name: "mike", age: 30 });

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

export default combineReducers({ User: userReducer });
