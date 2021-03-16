import React from "react";

const Footer = () => {
    
    return (
        <>
            {/* <!-- Footer Area --> */}
            <footer className="footer-area footer-bg">
                <div className="container">
                    <div className="footer-contact">
                        <div className="newsletter-area">
                            <h2>به اشتراک خبرنامه ما اضافه شوید</h2>
                            <form
                                className="newsletter-form"
                                data-toggle="validator"
                                method="POST"
                            >
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="ایمیل خود را وارد کنید"
                                    name="EMAIL"
                                    required
                                    autoComplete="off"
                                />
                                <button className="subscribe-btn" type="submit">
                                    اشتراک
                                </button>
                                <div
                                    id="validator-newsletter"
                                    className="form-result"
                                ></div>
                            </form>
                        </div>

                        <div className="newsletter-shape">
                            <div className="shape1">
                                <img
                                    src="assets/images/shape/shape1.png"
                                    alt="Images"
                                />
                            </div>
                            <div className="shape2">
                                <img
                                    src="assets/images/shape/shape2.png"
                                    alt="Images"
                                />
                            </div>
                            <div className="shape3">
                                <img
                                    src="assets/images/shape/shape3.png"
                                    alt="Images"
                                />
                            </div>
                            <div className="shape4">
                                <img
                                    src="assets/images/shape/shape4.png"
                                    alt="Images"
                                />
                            </div>
                            <div className="shape5">
                                <img
                                    src="assets/images/shape/shape3.png"
                                    alt="Images"
                                />
                            </div>
                            <div className="shape6">
                                <img
                                    src="assets/images/shape/shape2.png"
                                    alt="Images"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="footer-top pb-70">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index-2.html">
                                            <img
                                                src="assets/images/logos/logo-1.png"
                                                alt="Images"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        ما یکی از بهترین شرکت ها در جهان هستیم و
                                        شما می توانید به راحتی از ما خرید کنید.
                                    </p>
                                    <ul className="footer-list-contact">
                                        <li>
                                            <i className="flaticon-placeholder"></i>
                                            <a href="#">
                                                2873 یورک شایر سیرکل ، کارولینا
                                            </a>
                                        </li>
                                        <li>
                                            <i className="flaticon-smartphone"></i>
                                            <a href="tel:+501-529-1747">
                                                +501-529-1747
                                            </a>
                                        </li>
                                        <li>
                                            <i className="flaticon-messenger"></i>
                                            <a href="mailto:hello@olex.com">
                                                hello@olex.com
                                            </a>
                                        </li>
                                    </ul>

                                    <ul className="social-link">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
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
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h3>خدمات</h3>
                                    <ul className="footer-list">
                                        <li>
                                            <a
                                                href="wordpress-hosting.html"
                                                target="_blank"
                                            >
                                                اکانت من
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="tracking-order.html"
                                                target="_blank"
                                            >
                                                پیگیری سفارش
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="customer-services.html"
                                                target="_blank"
                                            >
                                                خدمات مشتریان
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="compare.html"
                                                target="_blank"
                                            >
                                                مقایسه
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="wishlist.html"
                                                target="_blank"
                                            >
                                                علاقه‌مندی‌ها
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="privacy-policy.html"
                                                target="_blank"
                                            >
                                                سیاست حفظ حریم شخصی
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget">
                                    <h3>لینک‌های مفید</h3>
                                    <ul className="footer-list">
                                        <li>
                                            <a
                                                href="index-2.html"
                                                target="_blank"
                                            >
                                                خانه
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="about.html"
                                                target="_blank"
                                            >
                                                درباره ما
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog-details.html"
                                                target="_blank"
                                            >
                                                بلاگ جزییات
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="shop-details.html"
                                                target="_blank"
                                            >
                                                جزییات محصول
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="testimonials.html"
                                                target="_blank"
                                            >
                                                رضایت مشتریان
                                            </a>
                                        </li>
                                        <li>
                                            <a href="team.html" target="_blank">
                                                تیم
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h3>ساعت کاری</h3>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی
                                        نامفهوم از صنعت چاپ و با استفاده از
                                        طراحان گرافیک است.
                                    </p>
                                    <ul className="footer-work-hour-list">
                                        <li>
                                            <span>شنبه-پنجشنبه:</span> 8:30
                                            قبل‌ازظهر - 5:30 بعدازظهر
                                        </li>
                                        <li>
                                            <span> جمعه:</span> 9:00 قبل‌ازظهر -
                                            2:00 بعدازظهر
                                        </li>
                                        <li>
                                            <span>دوشنبه:</span> بسته
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copy-right-area">
                        <div className="copy-right-text">
                            <p>
                                کپی رایت @ 1399 اولکس. کلیه حقوق محفوظ است .
                                ارایه از
                                <a href=" " target="_blank">
                                    AFARIDTEAM
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer Area End --> */}
        </>
    );
};

export default Footer;
