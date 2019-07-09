import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import SideBar from "../Common/SideBar";

import "./App.scss";

const Login = lazy(() => import("../../Containers/Login"));
const Profile = lazy(() => import("../../Containers/Profile"));
const Dashboard = lazy(() => import("../../Containers/Dashboard"));
const Reports = lazy(() => import("../../Containers/Reports"));
const NotFound = lazy(() => import("../Common/NotFound"));

const App = ({ childProps }) => {
  return (
    <div className="container-fluid">
      <SideBar />
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
    </div>
  );
};

export default App;
