import React, { useState, useContext } from "react";
import AuthContext from "../authorization/isAuth";
const DiscountCode = ({
    resultPurchase,
    applyAddress,
    applyCode,
    resultCode,
    applyPhoneNumber,
}) => {
    // check authorization
    const { auth } = useContext(AuthContext);
    const [discountCode, setDiscountCode] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <>
            <div className="col-lg-6">
                <div className="cart-calc">
                    {resultCode === 1 ? (
                        <div className="alert alert-success">
                            <p>کد تحفیف شما اعمال شد</p>
                        </div>
                    ) : (
                        <div className="cart-wraps-form">
                            {resultCode === 0 && (
                                <div className="alert alert-danger">
                                    <p>کد وارد شده اشتباه است</p>
                                </div>
                            )}
                            <div className="row">
                                <div className="form-group col-lg-7">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="کد تخفیف"
                                        value={discountCode}
                                        onChange={(e) =>
                                            setDiscountCode(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-lg-5 form-controll">
                                    <button
                                        type="button"
                                        onClick={() => applyCode(discountCode)}
                                        className="default-btn btn-bg-three"
                                    >
                                        اعمال تخفیف
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="cart-wraps-form mt-5">
                        <h3>لطفا نشانی خود را به طور دقیق بنویسید</h3>
                        {resultPurchase === -1 && !address && (
                            <div className="alert alert-danger">
                                <p>آدرس خود را وارد نمایید</p>
                            </div>
                        )}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="تهران تهران منطقه خیابان کوچه پلاک ..."
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={() => applyAddress(address)}
                            />
                        </div>
                    </div>
                    {!auth && (
                        <div className="cart-wraps-form mt-5">
                            <h3>لطفا شماره تلفن همراه خود را وارد کنید</h3>
                            {resultPurchase === -1 && phoneNumber.length < 11 && (
                                <div className="alert alert-danger">
                                    <p>شماره تلفن  معتبر وارد نمایید</p>
                                </div>
                            )}
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="09......"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                    onBlur={() => applyPhoneNumber(phoneNumber)}
                                 
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DiscountCode;
