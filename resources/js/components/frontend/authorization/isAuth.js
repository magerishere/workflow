import React, { Component, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export class AuthProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {},
        };
    }

    async componentDidMount() {
        const res = await axios.post("/auth", null);
        this.setState({ auth: res.data.auth });
    }
    render() {
        const { auth } = this.state;
        return (
            <AuthContext.Provider value={{ auth }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContext;
