import React, { useState } from "react";
import axios from "axios";
const ProductSendComment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const [message, setMessage] = useState("");

    const sendComment = async (e) => {
        e.preventDefault();
        const data = { name, email, body };
        const res = await axios.post("/comment", data);
        if (res.data.status === 200) {
            setName("");
            setEmail("");
            setBody("");
            setMessage("نظر شما ارسال شد و پس از تایید نمایش داده میشود");
        }
    };
    return (
        <>
            <p>{message}</p>
            <form id="contactForm" onSubmit={sendComment}>
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                required
                                data-error="لطفا نام خود را وارد نمایید"
                                placeholder="نام*"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                            <input
                                type="email"
                                name="email_address"
                                id="email_address"
                                required
                                data-error="Please enter email address"
                                className="form-control"
                                placeholder="آدرس ایمیل*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="8"
                                required
                                data-error="پیام خود را بنویسید"
                                placeholder="پیام شما"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <button
                            type="submit"
                            className="default-btn btn-bg-three"
                        >
                            ارسال پیام
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ProductSendComment;
