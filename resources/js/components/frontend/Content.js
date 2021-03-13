import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: localStorage.getItem("usercart")
                ? JSON.parse(localStorage.getItem("usercart"))
                : [],
        };
    }

    async componentDidMount() {
        const res = await axios.get("/product");
        const products = res.data.products;

        this.setState({ products });
    }

    addToCart = (product) => {
        let cart = this.state.cart.slice();
        let alreadyInCart = false;

        cart.forEach((item) => {
            if (item.id === product.id) {
                item.count++;
                alreadyInCart = true;
            }
        });

        if (!alreadyInCart) {
            cart.push({ ...product, count: 1 });
        }
        this.setState({ cart });
        localStorage.setItem("usercart", JSON.stringify(cart));
    };

    render() {
        const { products } = this.state;
        return (
            <>
                <section className="product-new-arrival pt-100 pb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3">
                                <div className="section-title">
                                    <h2>تازه رسیده ها</h2>
                                </div>
                            </div>

                            <div className="col-lg-9 col-md-9">
                                <ul className="filter-menu">
                                    <li
                                        className="filter active"
                                        data-filter="all"
                                    >
                                        همه محصولات
                                    </li>
                                    <li
                                        className="filter"
                                        data-filter=".television"
                                    >
                                        تلویزیون
                                    </li>
                                    <li className="filter" data-filter=".lamp">
                                        لامپ
                                    </li>
                                    <li
                                        className="filter"
                                        data-filter=".smartphone"
                                    >
                                        گوشی همراه
                                    </li>
                                    <li
                                        className="filter"
                                        data-filter=".camera"
                                    >
                                        دوربین
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="line-bottom" />

                        <div id="Container" className="row">
                            {products.map((product) => (
                                <div
                                    className="col-lg-3 col-sm-6"
                                    key={product.id}
                                >
                                    <div className="arrival-product">
                                        <div className="arrival-img">
                                            <Link
                                                to={`/product/${product.id}`}
                                            >
                                                <img
                                                    src={product.image}
                                                    alt="تصویر محصول"
                                                />
                                            </Link>
                                            <div className="new-tag">
                                                <h3>جدید</h3>
                                            </div>
                                        </div>

                                        <div className="content">
                                            <h3>
                                                <a href="shop-details.html">
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <span>
                                                کد محصول # {product.id}
                                            </span>
                                            <div className="price-tag">
                                                <h4>
                                                    {product.price} تومان
                                                    <del>159 تومان</del>
                                                </h4>
                                            </div>

                                            <div className="add-btn">
                                                <a
                                                    onClick={() =>
                                                        this.addToCart(product)
                                                    }
                                                    href="#"
                                                    className="add-cart-btn"
                                                >
                                                    خرید
                                                </a>
                                            </div>

                                            <ul className="products-action">
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-tooltip="tooltip"
                                                        data-placement="top"
                                                        title="افزودن در علاقه‌مندی‌ها"
                                                    >
                                                        <i className="bx bx-heart"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-tooltip="tooltip"
                                                        data-placement="top"
                                                        title="نمایش سریع"
                                                        data-toggle="modal"
                                                        data-target="#productsQuickView"
                                                    >
                                                        <i className="bx bx-show-alt"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <!-- Product New Arrival End --> */}
            </>
        );
    }
}

export default Content;
