import React, { useState } from "react";
import CalculateCart from "./CalculateCart";
import Transition from "./Transition";

const UserCart = () => {
    const [orders, setOrders] = useState(
        localStorage.getItem("usercart")
            ? JSON.parse(localStorage.getItem("usercart"))
            : []
    );
    return (
        <>
            {/* <!-- Start Cart Area --> */}
            <section className="cart-wraps-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <form>
                                <div className="cart-wraps">
                                    <div className="cart-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">محصول</th>
                                                    <th scope="col">نام</th>
                                                    <th scope="col">
                                                        قیمت واحد
                                                    </th>
                                                    <th scope="col">تعداد</th>
                                                    <th scope="col">کل</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {orders.map((order) => (
                                                    <tr key={order.id}>
                                                        <td className="product-thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src={order.image}
                                                                    alt="Image"
                                                                />
                                                            </a>
                                                        </td>

                                                        <td className="product-name">
                                                            <a href="#">
                                                                {order.name}
                                                            </a>
                                                        </td>

                                                        <td className="product-price">
                                                            <span className="unit-amount">
                                                                {order.price} تومان
                                                            </span>
                                                        </td>

                                                        <td className="product-quantity">
                                                            <div className="input-counter">
                                                                <span className="minus-btn">
                                                                    <i className="bx bx-minus"></i>
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    value={order.count}
                                                                />
                                                                <span className="plus-btn">
                                                                    <i className="bx bx-plus"></i>
                                                                </span>
                                                            </div>
                                                        </td>

                                                        <td className="product-subtotal">
                                                            <span className="subtotal-amount">
                                                                {order.price * order.count} تومان
                                                            </span>

                                                            <a
                                                                href="#"
                                                                className="remove"
                                                            >
                                                                <i className="bx bx-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="cart-buttons">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-7 col-md-7">
                                                <div className="continue-shopping-box">
                                                    <a
                                                        href="#"
                                                        className="default-btn btn-bg-three"
                                                    >
                                                        ادامه خرید
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                                <a
                                                    href="#"
                                                    className="default-btn btn-bg-three"
                                                >
                                                    بروزرسانی سبدخرید
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <Transition />
                                    <CalculateCart />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Cart Area --> */}
        </>
    );
};

export default UserCart;