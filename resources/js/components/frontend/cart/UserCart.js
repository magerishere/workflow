import React, { useState, useReducer, useContext } from "react";
import CalculateCart from "./CalculateCart";
import DiscountCode from "./DiscountCode";
import ReducerOrder from "./ReducerOrder";
import axios from "axios";
import AuthContext from "../authorization/isAuth";
const UserCart = () => {
    const [orders, dispatch] = useReducer(
        ReducerOrder,
        localStorage.getItem("usercart")
            ? JSON.parse(localStorage.getItem("usercart"))
            : []
    );
    const { auth } = useContext(AuthContext);
    const [resultPurchase, setResultPurchase] = useState(0);
    const [resultCode, setResultCode] = useState(-1);
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(
        auth ? auth.phone_number : ""
    );
    const [billPurchase,setBillPurchase] = useState(null);

    //For check discount code
    const applyCode = async (code) => {
        const res = await axios.post("/discountcode", { code });
        res.data.status === 200 ? setResultCode(1) : setResultCode(0);
    };

    //Final step of buy
    const finalPurchase = async (cost) => {
        if (address && phoneNumber.length === 11) {
            const res = await axios.post("/order", {
                orders,
                address,
                cost,
                phoneNumber,
            });
            if (res.data[0].original.status === 200) {
                setResultPurchase(1);
                setBillPurchase(res.data[0].original.bill);
                localStorage.setItem("usercart", []);
            }
        } else {
            //-1 = if dont set address return back message
            setResultPurchase(-1);
        }
    };

    return (
        <>
            {/* <!-- Start Cart Area --> */}
            <section className="cart-wraps-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            {orders.length > 0 ? (
                                <form>
                                    <div className="cart-wraps">
                                        <div className="cart-table table-responsive">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            محصول
                                                        </th>
                                                        <th scope="col">نام</th>
                                                        <th scope="col">
                                                            قیمت واحد
                                                        </th>
                                                        <th scope="col">
                                                            تعداد
                                                        </th>
                                                        <th scope="col">کل</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {orders.map((order) => (
                                                        <tr key={order.id}>
                                                            <td className="product-thumbnail">
                                                                <a href="#">
                                                                    <img
                                                                        src={
                                                                            order.image
                                                                        }
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
                                                                    {
                                                                        order.price
                                                                    }{" "}
                                                                    تومان
                                                                </span>
                                                            </td>

                                                            <td className="product-quantity">
                                                                <div className="input-counter">
                                                                    <span
                                                                        className="minus-btn"
                                                                        onClick={() =>
                                                                            dispatch(
                                                                                {
                                                                                    type:
                                                                                        "reduce",
                                                                                    payload:
                                                                                        order.id,
                                                                                }
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="bx bx-minus"></i>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        value={
                                                                            order.count
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            dispatch(
                                                                                {
                                                                                    type:
                                                                                        "manual",
                                                                                    payload: {
                                                                                        id:
                                                                                            order.id,
                                                                                        count:
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                    },
                                                                                }
                                                                            )
                                                                        }
                                                                    />
                                                                    <span
                                                                        className="plus-btn"
                                                                        onClick={() =>
                                                                            dispatch(
                                                                                {
                                                                                    type:
                                                                                        "add",
                                                                                    payload:
                                                                                        order.id,
                                                                                }
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="bx bx-plus"></i>
                                                                    </span>
                                                                </div>
                                                            </td>

                                                            <td className="product-subtotal">
                                                                <span className="subtotal-amount">
                                                                    {order.price *
                                                                        order.count}{" "}
                                                                    تومان
                                                                </span>

                                                                <a
                                                                    href="#"
                                                                    className="remove"
                                                                    onClick={() =>
                                                                        dispatch(
                                                                            {
                                                                                type:
                                                                                    "remove",
                                                                                payload:
                                                                                    order.id,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    <i className="bx bx-trash"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <DiscountCode
                                            resultPurchase={resultPurchase}
                                            applyCode={applyCode}
                                            resultCode={resultCode}
                                            applyAddress={(address) =>
                                                setAddress(address)
                                            }
                                            applyPhoneNumber={(phoneNumber) =>
                                                setPhoneNumber(phoneNumber)
                                            }
                                        />
                                        <CalculateCart
                                            orders={orders}
                                            resultCode={resultCode}
                                            finalPurchase={finalPurchase}
                                            resultPurchase={resultPurchase}
                                            billPurchase={billPurchase}
                                        />
                                    </div>
                                </form>
                            ) : (
                                <div className="alert alert-danger mt-5 text-center">
                                    <p>محصولی در سبد خرید شما وجود ندارد</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Cart Area --> */}
        </>
    );
};

export default UserCart;
