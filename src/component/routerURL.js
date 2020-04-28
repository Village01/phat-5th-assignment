import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Super from './Super'
import Luxury from './luxury'
import Ordinary from './ordinary'
import Home from './Home'
class routerURL extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/Home">
                        <Home />
                    </Route>
                    <Route path="/Super">
                        <Super />
                    </Route>
                    <Route path="/luxury">
                        <Luxury />
                    </Route>
                    <Route path="/ordinary">
                        <Ordinary />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
export default routerURL;