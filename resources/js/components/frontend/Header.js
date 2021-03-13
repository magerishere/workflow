import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { auth: false };
    }
    //For Auth check response
    async componentDidMount() {
        const result = await axios.post("/auth", null);
        console.log(result);
        this.setState({ auth: result.data.auth });
    }
    render() {
        const logout = async () => {
            const res = await axios.post("/logout", null);
        };
        const { auth } = this.state;
        return (
            <>
                {/* <!-- Top Header Start --> */}

                <div class="navbar-area">
                    {/* <!-- Menu For Mobile Device --> */}
                    <div class="mobile-nav">
                        <a href="index-2.html" class="logo">
                            <img
                                src="assets/images/logos/logo-1.png"
                                alt="Logo"
                            />
                        </a>
                    </div>

                    {/* <!-- Menu For Desktop Device --> */}
                    <div class="main-nav nav-three">
                        <div class="container">
                            <nav class="navbar navbar-expand-md navbar-light ">
                                <Link class="navbar-brand" to="/">
                                    <img
                                        src="assets/images/logos/logo-3.png"
                                        alt="Logo"
                                    />
                                </Link>

                                <div
                                    class="collapse navbar-collapse mean-menu"
                                    id="navbarSupportedContent"
                                >
                                    <ul class="navbar-nav m-auto">
                                        {auth && (
                                            <li>
                                                <Link onClick={logout}>
                                                    خروج
                                                </Link>
                                            </li>
                                        )}

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                خانه
                                                <i class="bx bx-chevron-down"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a
                                                        href="index-2.html"
                                                        class="nav-link"
                                                    >
                                                        خانه یک
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="index-3.html"
                                                        class="nav-link"
                                                    >
                                                        خانه دو
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="index-4.html"
                                                        class="nav-link"
                                                    >
                                                        خانه سه
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link active">
                                                صفحات
                                                <i class="bx bx-chevron-down"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a
                                                        href="about.html"
                                                        class="nav-link"
                                                    >
                                                        درباره ما
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="#"
                                                        class="nav-link active"
                                                    >
                                                        فروشگاه
                                                        <i class="bx bx-chevron-down"></i>
                                                    </a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item">
                                                            <a
                                                                href="shop-details.html"
                                                                class="nav-link"
                                                            >
                                                                جزییات محصول
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="shop-details-left-sidebar.html"
                                                                class="nav-link"
                                                            >
                                                                جزییات محصول با
                                                                سایدبار چپ
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="shop-details-right-sidebar.html"
                                                                class="nav-link"
                                                            >
                                                                جزییات محصول با
                                                                سایدبار راست
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="tracking-order.html"
                                                                class="nav-link"
                                                            >
                                                                پیگیری سفارش
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="size-guides.html"
                                                                class="nav-link"
                                                            >
                                                                راهنمای سایزبندی
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="customer-services.html"
                                                                class="nav-link"
                                                            >
                                                                خدمات مشتری
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="compare.html"
                                                                class="nav-link"
                                                            >
                                                                مقایسه
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="cart.html"
                                                                class="nav-link active"
                                                            >
                                                                سبد خرید
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="checkout.html"
                                                                class="nav-link"
                                                            >
                                                                ادامه خرید
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="wishlist.html"
                                                                class="nav-link"
                                                            >
                                                                علاقه‌مندی‌ها
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="my-account.html"
                                                                class="nav-link"
                                                            >
                                                                اکانت من
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="faq.html"
                                                        class="nav-link"
                                                    >
                                                        پرسش و پاسخ{" "}
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="team.html"
                                                        class="nav-link"
                                                    >
                                                        تیم
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="testimonials.html"
                                                        class="nav-link"
                                                    >
                                                        رضایت مشتریان
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="#"
                                                        class="nav-link"
                                                    >
                                                        کاربر
                                                        <i class="bx bx-chevron-down"></i>
                                                    </a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item">
                                                            <a
                                                                href="log-in.html"
                                                                class="nav-link"
                                                            >
                                                                ورود
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="register.html"
                                                                class="nav-link"
                                                            >
                                                                ثبت‌نام
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                href="forget-password.html"
                                                                class="nav-link"
                                                            >
                                                                فراموشی رمزعبور
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="terms-condition.html"
                                                        class="nav-link"
                                                    >
                                                        شرایط و مقررات
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="privacy-policy.html"
                                                        class="nav-link"
                                                    >
                                                        سیاست حریم شخصی
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="404.html"
                                                        class="nav-link"
                                                    >
                                                        404 صفحه
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="search-page.html"
                                                        class="nav-link"
                                                    >
                                                        صفحه جستجو
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a
                                                        href="coming-soon.html"
                                                        class="nav-link"
                                                    >
                                                        به زودی
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                فروشگاه
                                                <i class="bx bx-chevron-down"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a
                                                        href="shop-left-sidebar.html"
                                                        class="nav-link"
                                                    >
                                                        فروشگاه با سایدبار راست
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="shop-right-sidebar.html"
                                                        class="nav-link"
                                                    >
                                                        فروشگاه با سایدبار چپ
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="shop-grid.html"
                                                        class="nav-link"
                                                    >
                                                        فروشگاه با گرید
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="shop-full-width-sidebar.html"
                                                        class="nav-link"
                                                    >
                                                        فروشگاه با عرض کامل
                                                        سایدبار{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                دسته‌بندی
                                                <i class="bx bx-chevron-down"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a
                                                        href="categories-1.html"
                                                        class="nav-link"
                                                    >
                                                        دسته‌بندی(2 در صف)
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="categories-2.html"
                                                        class="nav-link"
                                                    >
                                                        دسته‌بندی (3 در صف)
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="categories-full-width.html"
                                                        class="nav-link"
                                                    >
                                                        دسته‌بندی تمام عرض
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                بلاگ
                                                <i class="bx bx-chevron-down"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a
                                                        href="blog-1.html"
                                                        class="nav-link"
                                                    >
                                                        بلاگ استایل یک
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="blog-2.html"
                                                        class="nav-link"
                                                    >
                                                        بلاگ استایل دو
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="blog-details.html"
                                                        class="nav-link"
                                                    >
                                                        بلاگ جزییات
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a
                                                href="contact.html"
                                                class="nav-link"
                                            >
                                                ارتباط با ما
                                            </a>
                                        </li>
                                    </ul>

                                    <div class="nav-other">
                                        <div class="nav-other-item">
                                            <div class="language-list">
                                                <select class="language-list-item">
                                                    <option>English</option>
                                                    <option>العربيّة</option>
                                                    <option>Deutsch</option>
                                                    <option>Português</option>
                                                    <option>简体中文</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="nav-other-item">
                                            <div class="cart-btn-area">
                                                <Link
                                                    to="/usercart"
                                                    class="cart-btn"
                                                >
                                                    <i class="bx bx-cart"></i>
                                                </Link>
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="nav-btn nav-other-btn">
                                        {auth ? (
                                            <Link
                                                to="/panel"
                                                class="default-btn btn-bg-three"
                                            >
                                                پنل کاربری
                                            </Link>
                                        ) : (
                                            <Link
                                                to="/login"
                                                class="default-btn btn-bg-three"
                                            >
                                                وارد شوید
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div class="side-nav-responsive">
                        <div class="container">
                            <div class="dot-menu">
                                <div class="circle-inner">
                                    <div class="circle circle-one"></div>
                                    <div class="circle circle-two"></div>
                                    <div class="circle circle-three"></div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="side-nav-inner">
                                    <div class="side-nav justify-content-center align-items-center">
                                        <div class="side-item">
                                            <div class="nav-other-item">
                                                <div class="language-list">
                                                    <div class="dropdown language-list-dropdown">
                                                        <button
                                                            class="btn dropdown-toggle"
                                                            type="button"
                                                            id="dropdownMenuButton-two"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            زبان
                                                            <i class="bx bx-chevron-down"></i>
                                                        </button>
                                                        <div
                                                            class="dropdown-menu"
                                                            aria-labelledby="dropdownMenuButton-two"
                                                        >
                                                            <a
                                                                class="dropdown-item"
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

                                            <div class="nav-other-item">
                                                <div class="cart-btn-area">
                                                    <Link
                                                        to="usercart"
                                                        class="cart-btn"
                                                    >
                                                        <i class="bx bx-cart"></i>
                                                    </Link>
                                                    <span>1</span>
                                                </div>
                                            </div>

                                            <div class="nav-other-item">
                                                <div class="option-btn">
                                                    <a
                                                        href="log-in.html"
                                                        class="default-btn"
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

export default Header;
