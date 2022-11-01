import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import nftReducer from "./store/reducers/NftReducer";

const store = createStore(nftReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
