import React, { useState } from "react";

const DiscountCode = ({ applyCode }) => {
    const [discountCode, setDiscountCode] = useState("");
    return (
        <>
            <div className="col-lg-6">
                <div className="cart-calc">
                    <div className="cart-wraps-form">
                        <h3>کد تخفیف خود را اینجا وارد کنید</h3>

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
                </div>
            </div>
        </>
    );
};

export default DiscountCode;
