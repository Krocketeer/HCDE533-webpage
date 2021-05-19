import React from "react";
import { Route, Switch } from 'react-router-dom';
import About from "./About"
import Home from "./Home"
import ProjectTemplate from './projects/ProjectTemplate'
import CookieCutters from "./projects/CookieCutters"
import CubesTubes from "./projects/CubesTubes";
import ClipNest from "./projects/ClipNest"
import Mesh from "./projects/Mesh"
import Lamp from "./projects/Lamp"
import Molds from "./projects/Molds"
import ProjectProposal from "./projects/ProjectProposal"

export default function Routing() {
    return <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About} />
        <Route path="/CookieCutters" exact component={CookieCutters} />
        <Route path="/CubesTubes" exact component={CubesTubes} />
        <Route path="/ClipNest" exact component={ClipNest} />
        <Route path="/Mesh" exact component={Mesh} />
        <Route path="/Lamp" exact component={Lamp} />
        <Route path="/Molds" exact component={Molds} />
        <Route path="/ProjectProposal" exact component={ProjectProposal} />
        <Route path="*" component={Home}/>
    </Switch>
}