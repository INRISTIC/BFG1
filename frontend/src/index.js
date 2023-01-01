import "normalize.css";
import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import Root from "./components/Root";

import { Provider } from "react-redux";

import "./18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Suspense>
  </Provider>
);
