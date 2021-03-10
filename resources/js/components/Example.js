import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./frontend/Header";
import Footer from "./frontend/Footer";
import Login from "./frontend/form/Login";
import Register from "./frontend/form/Register";
import Content from "./frontend/Content";
import ProductDetails from "./frontend/products/ProductDetails";
const Example = () => {
    console.log("exampple");
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Content} />
                </Switch>
                <Switch>
                    <Route path="/register" exact component={Register} />
                </Switch>
                <Switch>
                    <Route path="/login" exact component={Login} />
                </Switch>
                <Switch>
                    <Route path="/product/:id" exact component={ProductDetails} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
};

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
