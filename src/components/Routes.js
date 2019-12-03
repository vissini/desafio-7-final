import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Threads } from "./Threads";
import { Thread } from "./Thread";
import { NotFound } from "./NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Threads} />
    <Route path="/thread/:thread_slug" component={Thread} />
    <Route path="/404" component={NotFound} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
