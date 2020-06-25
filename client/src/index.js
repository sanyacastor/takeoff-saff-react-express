import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/bulma/css/bulma.min.css";
import App from "./App";

import { UserContext } from "./context/userContext";
import Auth from "./services/auth";

ReactDOM.render(
  <UserContext.Provider value={new Auth()}>
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
);
