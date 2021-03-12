import React from "react";

const CalculateCart = ({ orders, resultCode }) => {
    return (
        <>
            <div className="col-lg-6">
                <div className="cart-totals">
                    <h3>جمع سبد خرید</h3>
                    <ul>
                        <li>
                            جمع کل{" "}
                            <span>
                                {orders.reduce(
                                    (a, c) => a + c.price * c.count,
                                    0
                                )}{" "}
                                تومان
                            </span>
                        </li>
                        <li>
                            ارسال<span>3000 تومان</span>
                        </li>
                        <li>
                            کد تخفیف
                            <span>{resultCode ? "2000" : "0"} تومان</span>
                        </li>
                        <li>
                            جمع{" "}
                            <span>
                                <b>16000 تومان</b>
                            </span>
                        </li>
                    </ul>
                    <a href="#" className="default-btn btn-bg-three">
                        ادامه خرید
                    </a>
                </div>
            </div>
        </>
    );
};

export default CalculateCart;
