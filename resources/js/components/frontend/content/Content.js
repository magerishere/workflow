import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Preloader from "../PreLoader";
import Sort from "./Sort";
import Filter from "./Filter";
import Search from "./Search";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: localStorage.getItem("usercart")
                ? JSON.parse(localStorage.getItem("usercart"))
                : [],
            isLoading: true,
            quickView: null,
            sort: "",
            filterValue: "",
            filterProducts: [],
            search: "",
        };
    }

    async componentDidMount() {
        const res = await axios.get("/product");
        res.data.status === 200 &&
            this.setState({
                products: res.data.products,
                isLoading: false,
                filterProducts: res.data.products,
            });
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

    sortHandler = (e) => {
        const sort = e.target.value;
        const filterProducts = this.state.filterProducts
            .slice()
            .sort((a, b) =>
                sort === "highest"
                    ? a.price < b.price
                        ? 1
                        : -1
                    : sort === "lowest"
                    ? a.price > b.price
                        ? 1
                        : -1
                    : a.id > b.id
                    ? 1
                    : -1
            );
        this.setState({ sort, filterProducts });
    };

    filterHandler = (e) => {
        let result = [];
        if (e.target.value === "") {
            this.setState({
                sort: "",
                filterValue: e.target.value,
                filterProducts: this.state.products,
            });
        } else {
            this.state.products.map((product) => {
                if (product.type === e.target.value) {
                    result.push(product);
                }
            });
            this.setState({
                sort: "",
                filterValue: e.target.value,
                filterProducts: result,
            });
        }
    };

    searchHandler = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {
        const {
            filterProducts,
            isLoading,
            quickView,
            sort,
            filterValue,
            search,
        } = this.state;
        let filters = this.state.filterProducts.filter((product) => {
            return product.title.toLowerCase().indexOf(search) !== -1;
        });
        return (
            <>
                {isLoading && <Preloader />}
                <section className="product-new-arrival pt-100 pb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3">
                                <div className="section-title">
                                    <h2>تازه رسیده ها</h2>
                                </div>
                            </div>

                            <div className="col-lg-9 col-md-9">
                                <Sort
                                    sort={sort}
                                    sortHandler={this.sortHandler}
                                />
                                <Filter
                                    filterValue={filterValue}
                                    filterHandler={this.filterHandler}
                                />
                                <Search
                                    search={search}
                                    searchHandler={this.searchHandler}
                                />

                                <ul className="filter-menu">
                                    <li
                                        onClick={() =>
                                            this.sortHandler("highest")
                                        }
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
                            {filters.map((product) => (
                                <div
                                    className="col-lg-3 col-sm-6"
                                    key={product.id}
                                >
                                    {quickView === product.id ? (
                                        <div className="arrival-product">
                                            <div className="arrival-img">
                                                <p
                                                    onClick={() =>
                                                        this.setState({
                                                            quickView: null,
                                                        })
                                                    }
                                                >
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
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
                                                    <h3>{product.type}</h3>
                                                </div>
                                            </div>

                                            <div className="content">
                                                <h3>
                                                    <Link
                                                        to={`/product/${product.id}`}
                                                    >
                                                        {product.title}
                                                    </Link>
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
                                                            this.addToCart(
                                                                product
                                                            )
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
                                                            onClick={() =>
                                                                this.setState({
                                                                    quickView:
                                                                        product.id,
                                                                })
                                                            }
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
                                    )}
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
