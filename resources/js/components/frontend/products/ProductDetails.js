import axios from "axios";
import React, { Component } from "react";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
        };
    }

    async componentDidMount() {
        const productId = this.props.match.params["id"];
        const res = await axios.get(`/product/${productId}`);
        this.setState({ product: res.data.product });
    }
    render() {
        const { product } = this.state;
        return (
            <>
                {/* <!-- Product Details Area --> */}
                <div class="product-details-area pt-100 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <div class="product-detls-image">
                                    <img src={product.image} alt="Image" />
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="product-desc">
                                    <h3>{product.name}</h3>
                                    <div class="price">
                                        <span class="new-price">
                                            {product.price} تومان
                                        </span>
                                        <span class="old-price">
                                            3000 تومان
                                        </span>
                                    </div>

                                    <div class="product-review">
                                        <div class="rating">
                                            <i class="bx bxs-star"></i>
                                            <i class="bx bxs-star"></i>
                                            <i class="bx bxs-star"></i>
                                            <i class="bx bxs-star"></i>
                                            <i class="bx bxs-star-half"></i>
                                        </div>
                                        <a href="#" class="rating-count">
                                            3 نظر
                                        </a>
                                    </div>
                                    <p>{product.description}</p>

                                    <div class="input-count-area">
                                        <h3>تعداد</h3>
                                        <div class="input-counter">
                                            <span class="minus-btn">
                                                <i class="bx bx-minus"></i>
                                            </span>
                                            <input type="text" value="1" />
                                            <span class="plus-btn">
                                                <i class="bx bx-plus"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="product-add-btn">
                                        <button
                                            type="submit"
                                            class="default-btn btn-bg-three"
                                        >
                                            <i class="fas fa-cart-plus"></i>{" "}
                                            خرید!
                                        </button>
                                        <button
                                            type="submit"
                                            class="default-btn btn-bg-three"
                                        >
                                            <i class="fas fa-cart-plus"></i>{" "}
                                            افزودن به سبد خرید
                                        </button>
                                    </div>

                                    <div class="product-share">
                                        <ul>
                                            <li>
                                                <span>اشتراک:</span>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-instagram"></i>
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
                <div class="product-tab pt-100 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="tab products-details-tab">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <ul class="tabs">
                                                <li>
                                                    <a href="#">توضیحات</a>
                                                </li>
                                                <li>
                                                    <a href="#">نظرات</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        اطلاعات ارسال
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-lg-12 col-md-12">
                                            <div class="tab_content current active">
                                                <div class="tabs_item current">
                                                    <div class="products-tabs-decs">
                                                        <p>
                                                            لورم ایپسوم متن
                                                            ساختگی با تولید
                                                            سادگی نامفهوم از
                                                            صنعت چاپ و با
                                                            استفاده از طراحان
                                                            گرافیک است. چاپگرها
                                                            و متون بلکه روزنامه
                                                            و مجله در ستون و
                                                            سطرآنچنان که لازم
                                                            است و برای شرایط
                                                            فعلی تکنولوژی مورد
                                                            نیاز و کاربردهای
                                                            متنوع با هدف بهبود
                                                            ابزارهای کاربردی می
                                                            باشد. کتابهای زیادی
                                                            در شصت و سه درصد
                                                            گذشته، حال و آینده
                                                            شناخت فراوان جامعه و
                                                            متخصصان را می طلبد
                                                            تا با نرم افزارها
                                                            شناخت بیشتری را برای
                                                            طراحان رایانه ای علی
                                                            الخصوص طراحان خلاقی
                                                            و فرهنگ پیشرو در
                                                            زبان فارسی ایجاد
                                                            کرد. در این صورت می
                                                            توان امید داشت که
                                                            تمام و دشواری موجود
                                                            در ارائه راهکارها و
                                                            شرایط سخت تایپ به
                                                            پایان رسد وزمان مورد
                                                            نیاز شامل حروفچینی
                                                            دستاوردهای اصلی و
                                                            جوابگوی سوالات
                                                            پیوسته اهل دنیای
                                                            موجود طراحی اساسا
                                                            مورد استفاده قرار
                                                            گیرد.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="tabs_item">
                                                    <div class="products-tabs-reviews">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <div class="products-review-tab">
                                                                    <ul>
                                                                        <li>
                                                                            <img
                                                                                src="assets/images/blog/blog-profile1.jpg"
                                                                                alt="Image"
                                                                            />
                                                                            <h3>
                                                                                مگان
                                                                                فاکس
                                                                            </h3>
                                                                            <span>
                                                                                <i class="bx bx-calendar-event"></i>{" "}
                                                                                آذر
                                                                                02,
                                                                                1399,
                                                                                12:10
                                                                                بعدازظهر{" "}
                                                                            </span>
                                                                            <p>
                                                                                لورم
                                                                                ایپسوم
                                                                                متن
                                                                                ساختگی
                                                                                با
                                                                                تولید
                                                                                سادگی
                                                                                نامفهوم
                                                                                از
                                                                                صنعت
                                                                                چاپ
                                                                                و
                                                                                با
                                                                                استفاده
                                                                                از
                                                                                طراحان
                                                                                گرافیک
                                                                                است.
                                                                                چاپگرها
                                                                                و
                                                                                متون
                                                                                بلکه
                                                                                روزنامه
                                                                                و
                                                                                مجله
                                                                                در
                                                                                ستون
                                                                                و
                                                                                سطرآنچنان
                                                                                که
                                                                                لازم
                                                                                است
                                                                                و
                                                                                برای
                                                                                شرایط
                                                                                فعلی
                                                                                تکنولوژی
                                                                                مورد
                                                                                نیاز
                                                                                و
                                                                                کاربردهای
                                                                                متنوع
                                                                                با
                                                                                هدف
                                                                                بهبود
                                                                                ابزارهای
                                                                                کاربردی
                                                                                می
                                                                                باشد.
                                                                            </p>
                                                                            <div class="content">
                                                                                <h4>
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        لایک
                                                                                    </a>
                                                                                </h4>
                                                                                <h4>
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        پاسخ{" "}
                                                                                    </a>
                                                                                </h4>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <img
                                                                                src="assets/images/blog/blog-profile2.jpg"
                                                                                alt="Image"
                                                                            />
                                                                            <h3>
                                                                                مایک
                                                                                توماس
                                                                            </h3>
                                                                            <span>
                                                                                <i class="bx bx-calendar-event"></i>{" "}
                                                                                آذر
                                                                                02,
                                                                                1399,
                                                                                11:30
                                                                                بعدازظهر{" "}
                                                                            </span>
                                                                            <p>
                                                                                لورم
                                                                                ایپسوم
                                                                                متن
                                                                                ساختگی
                                                                                با
                                                                                تولید
                                                                                سادگی
                                                                                نامفهوم
                                                                                از
                                                                                صنعت
                                                                                چاپ
                                                                                و
                                                                                با
                                                                                استفاده
                                                                                از
                                                                                طراحان
                                                                                گرافیک
                                                                                است.
                                                                                چاپگرها
                                                                                و
                                                                                متون
                                                                                بلکه
                                                                                روزنامه
                                                                                و
                                                                                مجله
                                                                                در
                                                                                ستون
                                                                                و
                                                                                سطرآنچنان
                                                                                که
                                                                                لازم
                                                                                است
                                                                                و
                                                                                برای
                                                                                شرایط
                                                                                فعلی
                                                                                تکنولوژی
                                                                                مورد
                                                                                نیاز
                                                                                و
                                                                                کاربردهای
                                                                                متنوع
                                                                                با
                                                                                هدف
                                                                                بهبود
                                                                                ابزارهای
                                                                                کاربردی
                                                                                می
                                                                                باشد.
                                                                            </p>
                                                                            <div class="content">
                                                                                <h4>
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        لایک
                                                                                    </a>
                                                                                </h4>
                                                                                <h4>
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        پاسخ{" "}
                                                                                    </a>
                                                                                </h4>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div class="col-lg-6">
                                                                <div class="reviews-form">
                                                                    <div class="contact-form">
                                                                        <h3>
                                                                            افزودن
                                                                            نظر
                                                                        </h3>
                                                                        <p>
                                                                            لورم
                                                                            ایپسوم
                                                                            متن
                                                                            ساختگی
                                                                            با
                                                                            تولید
                                                                            سادگی
                                                                            نامفهوم
                                                                            از
                                                                            صنعت
                                                                            چاپ
                                                                            و با
                                                                            استفاده
                                                                            از
                                                                            طراحان
                                                                            گرافیک
                                                                            است.{" "}
                                                                        </p>
                                                                        <div class="rating">
                                                                            <i class="bx bxs-star"></i>
                                                                            <i class="bx bxs-star"></i>
                                                                            <i class="bx bxs-star"></i>
                                                                            <i class="bx bxs-star"></i>
                                                                            <i class="bx bxs-star-half"></i>
                                                                        </div>
                                                                        <form id="contactForm">
                                                                            <div class="row">
                                                                                <div class="col-lg-6 col-sm-6">
                                                                                    <div class="form-group">
                                                                                        <input
                                                                                            type="text"
                                                                                            name="name"
                                                                                            id="name"
                                                                                            class="form-control"
                                                                                            required
                                                                                            data-error="لطفا نام خود را وارد نمایید"
                                                                                            placeholder="نام*"
                                                                                        />
                                                                                    </div>
                                                                                </div>

                                                                                <div class="col-lg-6 col-sm-6">
                                                                                    <div class="form-group">
                                                                                        <input
                                                                                            type="email"
                                                                                            name="email_address"
                                                                                            id="email_address"
                                                                                            required
                                                                                            data-error="Please enter email address"
                                                                                            class="form-control"
                                                                                            placeholder="آدرس ایمیل*"
                                                                                        />
                                                                                    </div>
                                                                                </div>

                                                                                <div class="col-lg-12 col-md-12">
                                                                                    <div class="form-group">
                                                                                        <textarea
                                                                                            name="message"
                                                                                            class="form-control"
                                                                                            id="message"
                                                                                            cols="30"
                                                                                            rows="8"
                                                                                            required
                                                                                            data-error="پیام خود را بنویسید"
                                                                                            placeholder="پیام شما"
                                                                                        ></textarea>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="col-lg-12 col-md-12">
                                                                                    <button
                                                                                        type="submit"
                                                                                        class="default-btn btn-bg-three"
                                                                                    >
                                                                                        ارسال
                                                                                        پیام
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tabs_item">
                                                    <div class="products-tabs-shipping">
                                                        <ul>
                                                            <li>
                                                                آدرس:
                                                                <span>
                                                                    3227 جاده
                                                                    میلبوک،
                                                                    انگلستان
                                                                </span>
                                                            </li>

                                                            <li>
                                                                شماره تماس:
                                                                <a href="tel:+1(123)-456-7890-3524">
                                                                    +1 (123) 456
                                                                    7890 3524
                                                                </a>
                                                            </li>

                                                            <li>
                                                                ایمیل:
                                                                <a href="mailto:hello@olex.com">
                                                                    hello@olex.com
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
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
    }
}

export default ProductDetails;
