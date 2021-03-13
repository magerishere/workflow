import React, { useState } from "react";

const DiscountCode = ({ applyAddress,applyCode, resultCode }) => {
    const [discountCode, setDiscountCode] = useState("");
    const [address, setAddress] = useState("");
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
                            <h3>کد تخفیف خود را اینجا وارد کنید</h3>
                            {resultCode === 0 && (
                                <div className="alert alert-danger">
                                    <p>کد وارد شده اشتباه است</p>
                                </div>
                            )}
                            <div className="row">
                                <div className="form-group col-lg-8">
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
                                <div className="col-lg-4 form-controll">
                                    <a
                                        onClick={() => applyCode(discountCode)}
                                        className="default-btn btn-bg-three"
                                    >
                                        اعمال تخفیف
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="cart-wraps-form mt-3">
                        <h3>لطفا نشانی خود را به طور دقیق بنویسید</h3>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="تهران تهران منطقه خیابان کوچه پلاک ..."
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <a onClick={() => applyAddress(address)} className="default-btn btn-bg-three">تایید آدرس</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiscountCode;
