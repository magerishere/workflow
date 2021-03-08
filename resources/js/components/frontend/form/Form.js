import React, { useState } from "react";
import axios from "axios";
const Form = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [message, setMessage] = useState("");

    const register = (e) => {
        e.preventDefault();
        const data = { email, password };

        const res =
            password === confirm
                ? props.isRegister
                    ? axios.post("/user", data)
                    : axios.post("/login", data)
                : setMessage("Confirm does not match");
    };

    return (
        <>
            <form className="col-md-4" onSubmit={register}>
                <div className="mb-3">
                    <p>{message}</p>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        ایمیل
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                        ایمیل شما به صورت محرمانه نزد ما میباشد.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        رمز عبور
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {props.isRegister && (
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            تایید رمز عبور
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                        />
                    </div>
                )}

                <button type="submit" className="btn btn-primary">
                    {props.isRegister ? "ثبت نام" : "ورود"}
                </button>
            </form>
        </>
    );
};

export default Form;
