import React, { useState, useEffect } from "react";

const CalculateCart = ({ orders, resultCode,finalPurchase }) => {
    const [total, setTotal] = useState(
        orders.reduce((a, c) => a + c.price * c.count, 0)
    );
    const [offPrice, setOffPrice] = useState(0);

    useEffect(() => {
        setTotal(orders.reduce((a, c) => a + c.price * c.count, 0));
    }, [orders]);

    useEffect(() => {
        setOffPrice(resultCode === 1 ? 2000 : 0);
    }, [resultCode]);
    return (
        <>
            <div className="col-lg-6">
                <div className="cart-totals">
                    <h3>جمع سبد خرید</h3>
                    <ul>
                        <li>
                            جمع کل <span>{total} تومان</span>
                        </li>
                        <li>
                            ارسال<span>3000 تومان</span>
                        </li>
                        <li>
                            کد تخفیف
                            <span>{offPrice} تومان</span>
                        </li>
                        <li>
                            جمع{" "}
                            <span>
                                <b>{total - offPrice} تومان</b>
                            </span>
                        </li>
                    </ul>
                    <div className="col-lg-12 row">
                        <div className="col-lg-6">
                            <a  onClick={() => finalPurchase(total - offPrice)} className="default-btn btn-bg-three">
                                ادامه خرید
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="#" className="default-btn btn-bg-three">
                                بروزرسانی سبد خرید
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalculateCart;
