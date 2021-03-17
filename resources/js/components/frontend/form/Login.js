import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const login = async (e) => {
        e.preventDefault();
        const res = await axios.post("/login", { email, password });
        console.log(res);
        res.data[0].original.status === 200
            ? window.location.replace("/dashboard")
            : setMessage("ایمیل،شماره تلفن یا رمز عبور اشتباه است");
    };
    return (
        <>
            <>
                <div className="user-area pt-100 pb-70">
                    <div className="container">
                        <div className="user-width">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="user-content">
                                        <h2>سلام</h2>
                                        <p>
                                            شما به راحتی در هر زمانی میتوانید در
                                            سایت ما ثبت نام کنید
                                        </p>
                                        <Link
                                            to="/register"
                                            className="user-btn"
                                        >
                                            ثبت نام
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="user-form">
                                        <h2> ورود</h2>
                                        {message && (
                                            <p id="message" className="error">
                                                {message}
                                            </p>
                                        )}
                                        <form onSubmit={login}>
                                            <div className="row">
                                                <div className="col-lg-12 ">
                                                    <div className="form-group">
                                                        <i className="bx bx-user"></i>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            required
                                                            data-error="لطفا ایمیل یا شماره تلفن خود را وارد نمایید"
                                                            placeholder="ایمیل یا شماره تلفن"
                                                            value={email}
                                                            onChange={(e) =>
                                                                setEmail(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <i className="bx bx-lock"></i>
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            name="password"
                                                            placeholder="رمزعبور"
                                                            required
                                                            value={password}
                                                            onChange={(e) =>
                                                                setPassword(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 form-condition">
                                                    <div className="agree-label">
                                                        <label for="chb1">
                                                            <Link
                                                                className="forget"
                                                                to="/forgotpassword"
                                                            >
                                                                فراموشی رمز
                                                                عبور؟
                                                            </Link>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 ">
                                                    <button
                                                        type="submit"
                                                        className="default-btn btn-bg-three"
                                                    >
                                                        ورود
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default Login;
