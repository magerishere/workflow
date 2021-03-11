import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const sendForgotPassword = async (e) => {
        e.preventDefault();
        const res = await axios.post("/forgotpassword", { email });
        console.log(res);
        if (res.data[0].original.status === 200) {
            setMessage("رمز عبور جدید به ایمیل شما ارسال شد");
        } else {
            setMessage("ایمیل وجود ندارد !");
        }
    };
    return (
        <>
            {/* <!-- User Area --> */}
            <div class="user-area pt-100 pb-70">
                <div class="container">
                    <div class="user-width">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="forget-form">
                                    <div class="user-form">
                                        <h2>فراموشی رمزعبور</h2>
                                        <p>{message}</p>
                                        <form onSubmit={sendForgotPassword}>
                                            <div class="row">
                                                <div class="col-lg-12 ">
                                                    <div class="form-group">
                                                        <i class="bx bx-user"></i>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                            data-error="ایمیل یا نام کاربری خود را وارد نمایید"
                                                            placeholder="ایمیل یا نام کاربری "
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

                                                <div class="col-lg-12 ">
                                                    <button
                                                        type="submit"
                                                        class="default-btn btn-bg-three"
                                                    >
                                                        بازیابی رمزعبور
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
            </div>
            {/* <!-- User Area End --> */}
        </>
    );
};

export default ForgotPassword;
