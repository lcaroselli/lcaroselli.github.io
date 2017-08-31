import { combineReducers } from "redux";
import { loginSuccess, loginHasErred } from "./login-reducer";
import { fetchHasErred, fetchIsLoading, fetchDataSuccess } from './fetch-reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createUserErred, createUserSuccess } from './create-user-reducer'
import { logOutUser, createUserSignOut } from './sign-out-reducer'

const rootReducer = combineReducers({
  loginSuccess,
  loginHasErred,
  fetchHasErred,
  fetchIsLoading,
  fetchDataSuccess,
  routing: routerReducer,
  createUserSuccess,
  createUserErred,
  logOutUser,
  createUserSignOut
});

export default rootReducer;
