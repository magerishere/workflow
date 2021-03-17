import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../frontend/authorization/isAuth";

class Header extends Component {
  
    logout = async () => {
        await axios.post("/user/logout", null);
    };
    render() {
        // check authorization 
        const { auth } = this.context;
        return (
            <>
                {/* <!-- Top Header Start --> */}

                <div className="navbar-area">
                    {/* <!-- Menu For Mobile Device --> */}
                    <div className="mobile-nav">
                        <a href="index-2.html" className="logo">
                            <img
                                src="assets/images/logos/logo-3.png"
                                alt="Logo"
                            />
                        </a>
                    </div>

                    {/* <!-- Menu For Desktop Device --> */}
                    <div className="main-nav nav-three">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light ">
                                <Link className="navbar-brand" to="/">
                                    <img
                                        src="/images/logos/logo-3.png"
                                        alt="Logo"
                                    />
                                </Link>

                                <div
                                    className="collapse navbar-collapse mean-menu"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav m-auto">
                                        {auth && (
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    onClick={this.logout}
                                                >
                                                    خروج
                                                </a>
                                            </li>
                                        )}

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                خانه
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a
                                                        href="index-2.html"
                                                        className="nav-link"
                                                    >
                                                        خانه یک
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="index-3.html"
                                                        className="nav-link"
                                                    >
                                                        خانه دو
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="index-4.html"
                                                        className="nav-link"
                                                    >
                                                        خانه سه
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#"
                                                className="nav-link active"
                                            >
                                                صفحات
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a
                                                        href="about.html"
                                                        className="nav-link"
                                                    >
                                                        درباره ما
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="#"
                                                        className="nav-link active"
                                                    >
                                                        فروشگاه
                                                        <i className="bx bx-chevron-down"></i>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <a
                                                                href="shop-details.html"
                                                                className="nav-link"
                                                            >
                                                                جزییات محصول
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="shop-details-left-sidebar.html"
                                                                className="nav-link"
                                                            >
                                                                جزییات محصول با
                                                                سایدبار چپ
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="shop-details-right-sidebar.html"
                                                                className="nav-link"
                                                            >
                                                                جزییات محصول با
                                                                سایدبار راست
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="tracking-order.html"
                                                                className="nav-link"
                                                            >
                                                                پیگیری سفارش
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="size-guides.html"
                                                                className="nav-link"
                                                            >
                                                                راهنمای سایزبندی
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="customer-services.html"
                                                                className="nav-link"
                                                            >
                                                                خدمات مشتری
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="compare.html"
                                                                className="nav-link"
                                                            >
                                                                مقایسه
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="cart.html"
                                                                className="nav-link active"
                                                            >
                                                                سبد خرید
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="checkout.html"
                                                                className="nav-link"
                                                            >
                                                                ادامه خرید
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="wishlist.html"
                                                                className="nav-link"
                                                            >
                                                                علاقه‌مندی‌ها
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="my-account.html"
                                                                className="nav-link"
                                                            >
                                                                اکانت من
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="faq.html"
                                                        className="nav-link"
                                                    >
                                                        پرسش و پاسخ{" "}
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="team.html"
                                                        className="nav-link"
                                                    >
                                                        تیم
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="testimonials.html"
                                                        className="nav-link"
                                                    >
                                                        رضایت مشتریان
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="#"
                                                        className="nav-link"
                                                    >
                                                        کاربر
                                                        <i className="bx bx-chevron-down"></i>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <a
                                                                href="log-in.html"
                                                                className="nav-link"
                                                            >
                                                                ورود
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="register.html"
                                                                className="nav-link"
                                                            >
                                                                ثبت‌نام
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="forget-password.html"
                                                                className="nav-link"
                                                            >
                                                                فراموشی رمزعبور
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="terms-condition.html"
                                                        className="nav-link"
                                                    >
                                                        شرایط و مقررات
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="privacy-policy.html"
                                                        className="nav-link"
                                                    >
                                                        سیاست حریم شخصی
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="404.html"
                                                        className="nav-link"
                                                    >
                                                        404 صفحه
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="search-page.html"
                                                        className="nav-link"
                                                    >
                                                        صفحه جستجو
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        href="coming-soon.html"
                                                        className="nav-link"
                                                    >
                                                        به زودی
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                فروشگاه
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a
                                                        href="shop-left-sidebar.html"
                                                        className="nav-link"
                                                    >
                                                        فروشگاه با سایدبار راست
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="shop-right-sidebar.html"
                                                        className="nav-link"
                                                    >
                                                        فروشگاه با سایدبار چپ
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="shop-grid.html"
                                                        className="nav-link"
                                                    >
                                                        فروشگاه با گرید
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="shop-full-width-sidebar.html"
                                                        className="nav-link"
                                                    >
                                                        فروشگاه با عرض کامل
                                                        سایدبار{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                دسته‌بندی
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a
                                                        href="categories-1.html"
                                                        className="nav-link"
                                                    >
                                                        دسته‌بندی(2 در صف)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="categories-2.html"
                                                        className="nav-link"
                                                    >
                                                        دسته‌بندی (3 در صف)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="categories-full-width.html"
                                                        className="nav-link"
                                                    >
                                                        دسته‌بندی تمام عرض
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                بلاگ
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a
                                                        href="blog-1.html"
                                                        className="nav-link"
                                                    >
                                                        بلاگ استایل یک
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="blog-2.html"
                                                        className="nav-link"
                                                    >
                                                        بلاگ استایل دو
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="blog-details.html"
                                                        className="nav-link"
                                                    >
                                                        بلاگ جزییات
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="contact.html"
                                                className="nav-link"
                                            >
                                                ارتباط با ما
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="nav-other">
                                        <div className="nav-other-item">
                                            <div className="language-list">
                                                <select className="language-list-item">
                                                    <option>English</option>
                                                    <option>العربيّة</option>
                                                    <option>Deutsch</option>
                                                    <option>Português</option>
                                                    <option>简体中文</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="nav-other-item">
                                            <div className="cart-btn-area">
                                                <Link
                                                    to="/user/cart"
                                                    className="cart-btn"
                                                >
                                                    <i className="bx bx-cart"></i>
                                                </Link>
                                                <span>
                                                    {localStorage.getItem(
                                                        "usercart"
                                                    )
                                                        ? JSON.parse(
                                                              localStorage.getItem(
                                                                  "usercart"
                                                              )
                                                          ).length
                                                        : "0"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="nav-btn nav-other-btn">
                                        {auth ? (
                                            <Link
                                                to="/user/panel"
                                                className="default-btn btn-bg-three"
                                            >
                                                پنل کاربری
                                            </Link>
                                        ) : (
                                            <Link
                                                to="/user/login"
                                                className="default-btn btn-bg-three"
                                            >
                                                وارد شوید
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="side-nav-responsive">
                        <div className="container">
                            <div className="dot-menu">
                                <div className="circle-inner">
                                    <div className="circle circle-one"></div>
                                    <div className="circle circle-two"></div>
                                    <div className="circle circle-three"></div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="side-nav-inner">
                                    <div className="side-nav justify-content-center align-items-center">
                                        <div className="side-item">
                                            <div className="nav-other-item">
                                                <div className="language-list">
                                                    <div className="dropdown language-list-dropdown">
                                                        <button
                                                            className="btn dropdown-toggle"
                                                            type="button"
                                                            id="dropdownMenuButton-two"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            زبان
                                                            <i className="bx bx-chevron-down"></i>
                                                        </button>
                                                        <div
                                                            className="dropdown-menu"
                                                            aria-labelledby="dropdownMenuButton-two"
                                                        >
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                <img
                                                                    src="assets/images/language-flag/eng.png"
                                                                    alt="Images"
                                                                />
                                                                انگلیسی
                                                            </a>
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/language-flag/arabic.png"
                                                                    alt="Images"
                                                                />
                                                                عربی
                                                            </a>
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/language-flag/germany.png"
                                                                    alt="Images"
                                                                />
                                                                آلمانی
                                                            </a>
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/language-flag/portugal.png"
                                                                    alt="Images"
                                                                />
                                                                پرتقالی
                                                            </a>
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/language-flag/china.png"
                                                                    alt="Images"
                                                                />
                                                                چینی
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="nav-other-item">
                                                <div className="cart-btn-area">
                                                    <Link
                                                        to="/user/cart"
                                                        className="cart-btn"
                                                    >
                                                        <i className="bx bx-cart"></i>
                                                    </Link>
                                                    <span>1</span>
                                                </div>
                                            </div>

                                            <div className="nav-other-item">
                                                <div className="option-btn">
                                                    <a
                                                        href="log-in.html"
                                                        className="default-btn"
                                                    >
                                                        وارد شوید
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- End Navbar Area --> */}
            </>
        );
    }
}
Header.contextType = AuthContext;
export default Header;
