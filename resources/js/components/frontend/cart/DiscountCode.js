import React, { useState } from "react";

const DiscountCode = ({ applyCode, resultCode }) => {
    const [discountCode, setDiscountCode] = useState("");
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
                            <div className="form-group">
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
                            <a
                                onClick={() => applyCode(discountCode)}
                                className="default-btn btn-bg-three"
                            >
                                اعمال تخفیف
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DiscountCode;
