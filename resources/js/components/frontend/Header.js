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
            {/* <!-- Top Header Start --> */}
            <header class="top-header top-header-bg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-md-7">
                            <div class="top-header-form">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option>دسته‌بندی</option>
                                                    <option>الکترونیکی</option>
                                                    <option>
                                                        کودک و نوزاد
                                                    </option>
                                                    <option>کفش و لباس</option>
                                                    <option>
                                                        سلامت و زیبایی
                                                    </option>
                                                    <option>
                                                        سرگرمی و هنر
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-lg-8 pl-0">
                                            <div class="form-group search-form">
                                                <input
                                                    type="search"
                                                    class="form-control"
                                                    placeholder="جستجو محصولات"
                                                />
                                                <button type="submit">
                                                    <i class="bx bx-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-5 col-md-5">
                            <div class="top-header-right">
                                <div class="phone-btn">
                                    <span>
                                        <i class="bx bx-mobile-alt"></i>
                                        <a href="tel:+501-529-1747">
                                            +501-529-1747
                                        </a>
                                    </span>
                                </div>

                                <div class="other-option">
                                    <div class="option-item">
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
                                    <div class="option-item">
                                        <div class="cart-btn-area">
                                            <a href="#" class="cart-btn">
                                                <i class="bx bx-cart"></i>
                                            </a>
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Top Header End --> */}

            {/* <!-- Start Navbar Area --> */}
            <div class="navbar-area">
                {/* <!-- Menu For Mobile Device --> */}
                <div class="mobile-nav">
                    <Link to="/" class="logo">
                        <img src="/images/logos/elahe.png" alt="Logo" />
                    </Link>
                </div>

                {/* <!-- Menu For Desktop Device --> */}
                <div class="main-nav">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light ">
                            <Link class="navbar-brand" to="/">
                                <img
                                    width="109px"
                                    height="80px"
                                    src="/images/logos/elahe.png"
                                    alt="Logo"
                                />
                            </Link>

                            <div
                                class="collapse navbar-collapse mean-menu"
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav m-auto">
                                    <li class="nav-item">
                                        <a
                                            href="#"
                                            class="nav-link"
                                            onClick={logout}
                                        >
                                            خروج
                                            <i class="bx bx-chevron-down"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link active">
                                            خانه
                                            <i class="bx bx-chevron-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a
                                                    href="index-2.html"
                                                    class="nav-link active"
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
                                        <a href="#" class="nav-link">
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
                                                <a href="#" class="nav-link">
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
                                                            class="nav-link"
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
                                                <a href="#" class="nav-link">
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
                                                    فروشگاه با عرض کامل سایدبار{" "}
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
                                        <a href="contact.html" class="nav-link">
                                            ارتباط با ما
                                        </a>
                                    </li>

                                    {/* <li class="nav-item-btn ">
                                    <a href="log-in.html" class="default-btn border-radius-5 btn-bg-one">وارد شوید</a>
                                </li> */}
                                </ul>

                                <div class="nav-btn">
                                    <Link
                                        to="/login"
                                        class="default-btn border-radius-5 btn-bg-one"
                                    >
                                        وارد شوید
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- End Navbar Area --> */}
        </>
    );
};

export default Header;
