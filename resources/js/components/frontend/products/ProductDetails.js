import axios from "axios";
import React, { Component } from "react";
import ProductTab from "./ProductTab";
import { Provider } from "../Context";


class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            comments: [],
            product_id: this.props.match.params["id"],
            isLoading: true,
            cart: localStorage.getItem("usercart")
                ? JSON.parse(localStorage.getItem("usercart"))
                : [],
        };
    }

    async componentDidMount() {
        const product_id = this.state.product_id;
        const res = await axios.get(`/product/${product_id}`);

        res.data.status === 200 &&
            this.setState({
                product: { ...res.data.product, count: 1 },
                comments: res.data.comments,
                isLoading: false,
            });
    }

    addToCart = () => {
        let cart = this.state.cart.slice();
        let alreadyInCart = false;
        cart.forEach((item) => {
            if (item.id == this.state.product.id) {
                item.count = item.count + Number(this.state.product.count);
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cart.push({ ...this.state.product });
        }
        this.setState({ cart });
        localStorage.setItem("usercart", JSON.stringify(cart));
    };
    countChangeHanlder = (e) => {
        const { value } = e.target;
        const { product } = this.state;
        this.setState((prevState) => ({
            product: {
                ...product,
                count: value,
            },
        }));
    };
    render() {
        const { product, comments, product_id, isLoading } = this.state;
        const { count } = this.state.product;
        return (
            <>
                {isLoading && (
                    <div className="preloader">
                        <div className="spinner">
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                        </div>
                    </div>
                )}
                {/* <!-- Product Details Area --> */}
                <div className="product-details-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="product-detls-image">
                                    <img src={product.image} alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="product-desc">
                                    <h3>{product.name}</h3>
                                    <div className="price">
                                        <span className="new-price">
                                            {product.price} تومان
                                        </span>
                                        <span className="old-price">
                                            3000 تومان
                                        </span>
                                    </div>

                                    <div className="product-review">
                                        <div className="rating">
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star-half"></i>
                                        </div>
                                        <a
                                            href="#comments"
                                            className="rating-count"
                                        >
                                            {comments.length} نظر
                                        </a>
                                    </div>
                                    <p>{product.description}</p>

                                    <div className="input-count-area">
                                        <h3>تعداد</h3>
                                        <div className="input-counter">
                                            <span
                                                className="minus-btn"
                                                onClick={() =>
                                                    this.setState(
                                                        (prevState) => ({
                                                            product: {
                                                                ...product,
                                                                count:
                                                                    count > 1
                                                                        ? count -
                                                                          1
                                                                        : 1,
                                                            },
                                                        })
                                                    )
                                                }
                                            >
                                                <i className="bx bx-minus"></i>
                                            </span>
                                            <input
                                                type="text"
                                                value={count}
                                                onChange={
                                                    this.countChangeHanlder
                                                }
                                            />
                                            <span
                                                className="plus-btn"
                                                onClick={() =>
                                                    this.setState(
                                                        (prevState) => ({
                                                            product: {
                                                                ...product,
                                                                count:
                                                                    count + 1,
                                                            },
                                                        })
                                                    )
                                                }
                                            >
                                                <i className="bx bx-plus"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="product-add-btn">
                                        <button
                                            type="submit"
                                            className="default-btn btn-bg-three"
                                            onClick={this.addToCart}
                                        >
                                            <i className="fas fa-cart-plus"></i>{" "}
                                            خرید!
                                        </button>
                                        <button
                                            type="submit"
                                            className="default-btn btn-bg-three"
                                        >
                                            <i className="fas fa-cart-plus"></i>{" "}
                                            افزودن به سبد خرید
                                        </button>
                                    </div>

                                    <div className="product-share">
                                        <ul>
                                            <li>
                                                <span>اشتراک:</span>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Details Area End --> */}

                {/* <!-- Product Tab --> */}
                <Provider value={{ product_id }}>
                    <ProductTab comments={comments} />
                </Provider>
                {/* <!-- Product Tab End --> */}
            </>
        );
    }
}


export default ProductDetails;
