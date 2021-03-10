import React, { useState } from "react";
import axios from "axios";
import { validation } from "./validation";
import { Link } from "react-router-dom";

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
            } else {
                setMessage("ایمیل یا رمز عبور اشتباه است");
            }
        }
    };

    return (
        <>
            {/* <!-- User Area --> */}
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
                                        to={isRegister ? "/login" : "/register"}
                                        className="user-btn"
                                    >
                                        {isRegister ? "وارد شوید" : "ثبت نام"}
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="user-form">
                                    <h2>{isRegister ? "ثبت نام" : "ورود"}</h2>
                                    {message && (
                                        <p id="message" className="error">
                                            {message}
                                        </p>
                                    )}
                                    <form onSubmit={register}>
                                        <div className="row">
                                            <div className="col-lg-12 ">
                                                <div className="form-group">
                                                    <i className="bx bx-user"></i>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        data-error="لطفا ایمیل خود را وارد نمایید"
                                                        placeholder="ایمیل"
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {isRegister && (
                                                        <div className="form-text">
                                                            مثال :
                                                            example@gmail.com
                                                        </div>
                                                    )}
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
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {isRegister && (
                                                        <div className="form-text">
                                                            بیشتر از 8 رقم
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {isRegister && (
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <i className="bx bx-lock"></i>
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            name="confirm"
                                                            required
                                                            placeholder="تکرار رمز عبور"
                                                            value={confirm}
                                                            onChange={(e) =>
                                                                setConfirm(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                            {!isRegister && (
                                                <div className="col-lg-12 form-condition">
                                                    <div className="agree-label">
                                                        <label for="chb1">
                                                            <a
                                                                className="forget"
                                                                href="forget-password.html"
                                                            >
                                                                فراموشی رمز
                                                                عبور؟
                                                            </a>
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="col-lg-12 ">
                                                <button
                                                    type="submit"
                                                    className="default-btn btn-bg-three"
                                                >
                                                    {isRegister
                                                        ? "ثبت نام"
                                                        : "ورود"}
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
            {/* <!-- User Area End --> */}
        </>
    );
};

export default Form;
