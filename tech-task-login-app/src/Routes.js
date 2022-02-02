import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import App from "./App";
import Home from "./components/home/Home";
import Reset from "./components/login/Reset";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/home" component={Home} />
                    <Route path="/reset" component={Reset} />
                </Switch>
            </Router>
        )
    }
}
