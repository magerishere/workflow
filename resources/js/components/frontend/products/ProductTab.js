import React, { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductComments from "./ProductComments";
import ProductAddress from "./ProductAddress";
const ProductTab = ({comments}) => {
    const [active, setActive] = useState(1);
    return (
        <>
            {/* <!-- Product Tab --> */}
            <div className="product-tab pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab products-details-tab">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <ul className="tabs">
                                            <li
                                                className={
                                                    active === 1 && "current"
                                                }
                                            >
                                                <a onClick={() => setActive(1)}>
                                                    توضیحات
                                                </a>
                                            </li>
                                            <li
                                                className={
                                                    active === 2 && "current"
                                                }
                                            >
                                                <a onClick={() => setActive(2)}>
                                                    نظرات
                                                </a>
                                            </li>
                                            <li
                                                className={
                                                    active === 3 && "current"
                                                }
                                            >
                                                <a onClick={() => setActive(3)}>
                                                    اطلاعات ارسال
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div id="comments" className="tab_content current active">
                                            {active === 1 && (
                                                <ProductDescription />
                                            )}
                                            {active === 2 && (
                                                <ProductComments comments={comments} />
                                            )}
                                            {active === 3 && <ProductAddress />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Product Tab End --> */}
        </>
    );
};

export default ProductTab;
