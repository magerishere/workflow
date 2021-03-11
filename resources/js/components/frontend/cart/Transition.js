import React from "react";

const Transition = () => {
    return (
        <>
            <div className="col-lg-6">
                <div className="cart-calc">
                    <div className="cart-wraps-form">
                        <h3>محاسبه حمل و نقل</h3>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <select>
                                        <option value="">کارت اعتباری</option>
                                        <option value="">گزینه ی دیگر</option>
                                        <option value="">گزینه بعد</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="شماره کارت اعتباری"
                                />
                            </div>
                            <div className="form-group col-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="شماره تایید کارت اعتباری"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="کد تخفیف"
                            />
                        </div>
                        <a href="#" className="default-btn btn-bg-three">
                            اعمال تخفیف
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transition;
