import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile";
import Maps from "./pages/Maps";
import ApiKeys from "./pages/ApiKeys";
import Support from "./pages/Support";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path="user" component={UserProfile}></Route>
            <Route path="maps" component={Maps}></Route>
            <Route path="settings" component={Settings}></Route>
            <Route path="apikeys" component={ApiKeys}></Route>
            <Route path="support" component={Support}></Route>
        </Route>
    </Router>,
    app);
