import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Indecision from "./components/IndecisionApp/Indecision/Indecision";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import registerServiceWorker from "./registerServiceWorker";
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Indecision />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
