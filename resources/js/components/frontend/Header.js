import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Header = () => {
    const logout = async () => {
        const res = await axios.post("/logout", null);
        console.log(res);
    };
    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <div className="container">
                        <div className="logo">
                            <a href="index.html">
                                <img
                                    src="assets/img/logo-bella-shop.png"
                                    alt="Bella Shop"
                                />
                            </a>
                        </div>

                        <div className="header-search">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="What are you looking?"
                            />
                            <button>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>

                        <div className="header-cart">
                            <div className="cart-wrapper">
                                <a
                                    href="wishlist.html"
                                    className="btn btn-theme-transparent hidden-xs hidden-sm"
                                >
                                    <i className="fa fa-heart"></i>
                                </a>
                                <a
                                    href="compare-products.html"
                                    className="btn btn-theme-transparent hidden-xs hidden-sm"
                                >
                                    <i className="fa fa-exchange"></i>
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-theme-transparent"
                                    data-toggle="modal"
                                    data-target="#popup-cart"
                                >
                                    <i className="fa fa-shopping-cart"></i>{" "}
                                    <span className="hidden-xs">
                                        {" "}
                                        0 item(s) - $0.00{" "}
                                    </span>{" "}
                                    <i className="fa fa-angle-down"></i>
                                </a>

                                <a
                                    href="#"
                                    className="menu-toggle btn btn-theme-transparent"
                                >
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-wrapper">
                    <div className="container">
                        <nav className="navigation closed clearfix">
                            <a href="#" className="menu-toggle-close btn">
                                <i className="fa fa-times"></i>
                            </a>
                            <ul className="nav sf-menu">
                                <li className="active">
                                    <a href="index.html">Homepage</a>
                                    <ul>
                                        <li>
                                            <a href="index.html">Homepage 1</a>
                                        </li>
                                        <li>
                                            <a href="index-2.html">
                                                Homepage 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-3.html">
                                                Homepage 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-4.html">
                                                Homepage 4
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-5.html">
                                                Homepage 5
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-6.html">
                                                Homepage 6
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-7.html">
                                                Homepage 7
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-8.html">
                                                Homepage 8
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-9.html">
                                                Homepage 9
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="category.html">Shop</a>
                                    <ul>
                                        <li>
                                            <a href="category.html">
                                                Shop Sidebar Left
                                            </a>
                                        </li>
                                        <li>
                                            <a href="category-right.html">
                                                Shop Sidebar Right
                                            </a>
                                        </li>
                                        <li>
                                            <a href="category-list.html">
                                                Shop List View
                                            </a>
                                        </li>
                                        <li>
                                            <a href="product-details.html">
                                                Product Page
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                    <ul>
                                        <li>
                                            <a href="blog.html">
                                                Blog Sidebar Left{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-right.html">
                                                Blog Sidebar Right
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-post.html">
                                                Blog Single Post
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="portfolio.html">Portfolio</a>
                                    <ul>
                                        <li>
                                            <a href="portfolio.html">
                                                Portfolio 3 columns
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-4col.html">
                                                Portfolio 4 columns
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-alt.html">
                                                Portfolio Alternate
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-single.html">
                                                Portfolio Single
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="megamenu">
                                    <a href="#">Features</a>
                                    <ul>
                                        <li className="row">
                                            <div className="col-md-2">
                                                <h4 className="block-title">
                                                    <span>Womens</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <a href="#">Dresses</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Rompers & Jumpsuits
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Bodysuits
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Shirts & Blouses
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Coats & Jackets
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Blazers</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2">
                                                <h4 className="block-title">
                                                    <span>Mens</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            T-Shirts & Vests
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Sweaters & Cardigans
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Hoodies & Sweats
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Coats & Jackets
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shirts</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shorts</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2">
                                                <h4 className="block-title">
                                                    <span>Pages</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <a href="shortcodes.html">
                                                            <strong>
                                                                Shortcodes
                                                            </strong>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="typography.html">
                                                            <strong>
                                                                Typography
                                                            </strong>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="coming-soon.html">
                                                            <strong>
                                                                Coming soon
                                                            </strong>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="error-page.html">
                                                            <strong>
                                                                404 Page
                                                            </strong>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">
                                                            <strong>
                                                                About
                                                            </strong>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">
                                                            <strong>
                                                                Login
                                                            </strong>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <h4 className="block-title">
                                                    <span>Paragraph</span>
                                                </h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing
                                                    elit...
                                                </p>
                                                <p>
                                                    Suspendisse molestie est nec
                                                    tortor placerat, vel
                                                    pellentesque metus
                                                    sollicitudin. Suspendisse
                                                    congue sem mauris, at
                                                    ultrices felis blandit non.
                                                </p>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="product-list">
                                                    <div className="media">
                                                        <a
                                                            className="pull-left media-link"
                                                            href="#"
                                                        >
                                                            <img
                                                                className="media-object"
                                                                src="assets/img/preview/shop/top-sellers-2.jpg"
                                                                alt=""
                                                            />
                                                            <i className="fa fa-plus"></i>
                                                        </a>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">
                                                                <a href="#">
                                                                    Standard
                                                                    Product
                                                                    Header
                                                                </a>
                                                            </h4>
                                                            <div className="rating">
                                                                <span className="star"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                            </div>
                                                            <div className="price">
                                                                <ins>
                                                                    $400.00
                                                                </ins>{" "}
                                                                <del>
                                                                    $425.00
                                                                </del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <a
                                                            className="pull-left media-link"
                                                            href="#"
                                                        >
                                                            <img
                                                                className="media-object"
                                                                src="assets/img/preview/shop/top-sellers-3.jpg"
                                                                alt=""
                                                            />
                                                            <i className="fa fa-plus"></i>
                                                        </a>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">
                                                                <a href="#">
                                                                    Standard
                                                                    Product
                                                                    Header
                                                                </a>
                                                            </h4>
                                                            <div className="rating">
                                                                <span className="star"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                            </div>
                                                            <div className="price">
                                                                <ins>
                                                                    $400.00
                                                                </ins>{" "}
                                                                <del>
                                                                    $425.00
                                                                </del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="category.html">Men</a>
                                </li>
                                <li>
                                    <a href="category.html">Women</a>
                                </li>
                                <li>
                                    <a href="category.html">Kids</a>
                                </li>
                                <li>
                                    <a href="category.html">New</a>
                                </li>
                                <li className="sale">
                                    <a href="category.html">Sale</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
