import React from "react";

const ProductAddress = () => {
    return (
        <>
            <div className="tabs_item">
                <div className="products-tabs-shipping">
                    <ul>
                        <li>
                            آدرس:
                            <span>3227 جاده میلبوک، انگلستان</span>
                        </li>

                        <li>
                            شماره تماس:
                            <a href="tel:+1(123)-456-7890-3524">
                                +1 (123) 456 7890 3524
                            </a>
                        </li>

                        <li>
                            ایمیل:
                            <a href="mailto:hello@olex.com">hello@olex.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ProductAddress;
