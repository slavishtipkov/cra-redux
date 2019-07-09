import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Login = lazy(() => import("../../Containers/Login"));
const Profile = lazy(() => import("../../Containers/Profile"));
const Dashboard = lazy(() => import("../../Containers/Dashboard"));
const Reports = lazy(() => import("../../Containers/Reports"));
const NotFound = lazy(() => import("../Common/NotFound"));

export default ({ childProps }) => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Login} props={childProps} />
        <Route path="/profile" exact component={Profile} props={childProps} />
        <Route
          path="/dashboard"
          exact
          component={Dashboard}
          props={childProps}
        />
        <Route path="/reports" exact component={Reports} props={childProps} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);
