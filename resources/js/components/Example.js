import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import Header from "./frontend/Header";
import Login from "./frontend/form/Login";
import Register from "./frontend/form/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            </Router>
        </>
    );
};

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
