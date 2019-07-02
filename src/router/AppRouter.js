import React from "react";
import { HashRouter as Router, Route, } from "react-router-dom";

import Login from "../pages/login";
import Info from "../pages/Info";

function AppRouter() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Login} />
                <Route path="/info" component={Info} />
            </div>
        </Router>
    );
}

export default AppRouter;