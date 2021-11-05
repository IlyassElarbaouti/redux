import ReactDOM from "react-dom";
import React from "react";
import App from './App'
import { counterReducer } from "./counterReducer";
import {createStore,combineReducers} from 'redux'
import {Provider } from 'react-redux'
import './index.scss'
const root = document.querySelector("#root");
const reducer = combineReducers({counter:counterReducer});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
