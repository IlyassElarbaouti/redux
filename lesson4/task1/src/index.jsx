import ReactDOM from "react-dom";
import React from "react";
import App from './App'
import {Provider } from 'react-redux'
import './index.scss'
import { store } from "./store";

const root = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
