import React, { useState, useEffect } from "react";

const CalculateCart = ({
    orders,
    resultCode,
    finalPurchase,
    resultPurchase,
    billPurchase,
}) => {
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
                    {resultPurchase === 1 && billPurchase ? (
                        <div className="alert alert-success">
                            <h3> فاکتور خرید شما کد رهگیری {billPurchase.bill_id}#</h3>

                            <ul>
                                <li>
                                    جمع کل <span>{billPurchase.cost} تومان</span>
                                </li>
                                <li>
                                    آدرس<span>{billPurchase.address}</span>
                                </li>
                                <li>
                                    شماره تلفن
                                    <span>{billPurchase.phone_number}</span>
                                </li>
                             
                            </ul>
                            <p>فاکتور شما به شماره ارسال میشود</p>
                        </div>
                    ) : (
                        <>
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
                                    <button
                                        type="button"
                                        onClick={() =>
                                            finalPurchase(total - offPrice)
                                        }
                                        className="default-btn btn-bg-three"
                                    >
                                        ادامه خرید
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default CalculateCart;
