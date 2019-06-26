import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./component/Home"
import Contact from "./component/Contact"
import React from "react"

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vk" component={Contact} />
        </Switch>
    </Router>
)