import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const validation = (password, confirm) => {
    return password.length > 8
        ? password === confirm
            ? true
            : "رمز تایید همخوانی ندارد"
        : "رمز عبور باید بیشتر از 8 رقم باشد";
};
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [message, setMessage] = useState("");

    const register = async (e) => {
        e.preventDefault();
        const isValid = validation(password, confirm);

        if (isValid === true) {
            let res = await axios.post("/user", { email, password });
            console.log(res);
            if (res.data[0].original.status === 200) {
                res = await axios.post("/user/login", { email, password });
                res.data[0].original.status === 200 && window.location.replace('/user/panel');
            } else {
                setMessage("ایمیل یا شماره تلفن وجود دارد");
            }
        } else {
            setMessage(isValid);
        }
    };
    return (
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
                                    <Link to="/user/login" className="user-btn">
                                        ورود
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="user-form">
                                    <h2>ثبت نام</h2>
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
                                                        data-error="لطفا ایمیل یا شماره تلفن خود را وارد نمایید"
                                                        placeholder="ایمیل یا شماره تلفن"
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <div className="form-text">
                                                        مثال : example@gmail.com
                                                    </div>
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

                                                    <div className="form-text">
                                                        بیشتر از 8 رقم
                                                    </div>
                                                </div>
                                            </div>

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
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 ">
                                                <button
                                                    type="submit"
                                                    className="default-btn btn-bg-three"
                                                >
                                                    ثبت نام
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
    );
};

export default Register;
