import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import LoginPage from "./Pages/LoginPage";
import ContactsPage from "./Pages/ContactsPage";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/contacts' component={ContactsPage} />} />
        <Route>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
