import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import About from "./About"
import Home from "./Home"
import ProjectTemplate from './projects/ProjectTemplate'
import CookieCutters from "./projects/CookieCutters"

export default function Routing() {
    return <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About} />
        <Route path="/CookieCutters" exact component={CookieCutters} />

        {/*<Route path="*" component={About}/>*/}
    </Switch>
}