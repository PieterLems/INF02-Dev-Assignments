import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.jsx";
import AdminLayout from "layouts/Admin/Admin.jsx";

import "assets/css/nucleo-icons.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
import "react-notification-alert/dist/animate.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/NUI" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/NUI/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
