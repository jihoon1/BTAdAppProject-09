import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import "./index.css";
import App from "./App";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import getLibrary from "./utils/getLibrary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
