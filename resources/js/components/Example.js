import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../css/app.css";
import Header from "./frontend/Header";
import Login from "./frontend/form/Login";
import Register from "./frontend/form/Register";
import Content from './frontend/Content';

const Example = () => {
    console.log("exampple");
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/register" exact component={Register} />
                </Switch>
                <Switch>
                    <Route path="/login" exact component={Login} />
                </Switch>
                <Switch>
                    <Route path="/content" exact component={Content} />
                </Switch>
            </Router>
        </>
    );
};

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
