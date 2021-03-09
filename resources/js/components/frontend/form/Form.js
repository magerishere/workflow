import React, { useState } from "react";
import axios from "axios";
import { validation } from "./validation";

const Form = ({ isRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [message, setMessage] = useState("");

    const register = async (e) => {
        e.preventDefault();
        if (isRegister) {
            const result = await validation(email, password, confirm);
            setMessage(result);
            if (result === "موفق! درحال آماده سازی حساب شما ...") {
                document.getElementById("message").classList.add("bg-success");
                setTimeout(() => {
                    window.location.replace("/");
                }, 3000);
            }
        } else {
            const response = await axios.post("/user", { email, password });
            if (response.data[0].original.status === 200) {
                window.location.replace("/user");
            }
        }
    };

    return (
        <>
            <form className="col-md-4" onSubmit={register}>
                <div className="mb-3">
                    {message && (
                        <p id="message" className="error">
                            {message}
                        </p>
                    )}
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        ایمیل
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {isRegister && (
                        <div id="emailHelp" className="form-text">
                            {" "}
                            مثال: example@gmail.com
                        </div>
                    )}
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
                        required
                    />
                    {isRegister && (
                        <div id="passwordHelp" className="form-text">
                            بیشتر از 8 رقم
                        </div>
                    )}
                </div>
                {isRegister && (
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword2"
                            className="form-label"
                        >
                            تایید رمز عبور
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword2"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            required
                        />
                        <div
                            id="confirmPasswordHelp"
                            className="form-text"
                        ></div>
                    </div>
                )}

                <button type="submit" className="btn btn-primary">
                    {isRegister ? "ثبت نام" : "ورود"}
                </button>
            </form>
        </>
    );
};

export default Form;
