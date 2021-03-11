import React from "react";
import ProductSendComment from "./ProductSendComment";
import moment from "moment";
const ProductComments = ({ comments,productId }) => {
    return (
        <>
            <div className="tabs_item">
                <div className="products-tabs-reviews">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="products-review-tab">
                                <ul>
                                    {comments.length > 0 ? (
                                        comments.map((comment) => (
                                            <li>
                                                <img
                                                    src="/images/blog/blog-profile1.jpg"
                                                    alt="Image"
                                                />

                                                <h3>{comment.name}</h3>
                                                <span>
                                                    <i className="bx bx-calendar-event"></i>{" "}
                                                    {moment(
                                                        comment.created_at
                                                    ).fromNow()}{" "}
                                                </span>
                                                <p>{comment.body}</p>
                                                <div className="content">
                                                    <h4>
                                                        <a href="#"> لایک</a>
                                                    </h4>
                                                    <h4>
                                                        <a href="#"> پاسخ </a>
                                                    </h4>
                                                </div>
                                            </li>
                                        ))
                                    ) : (
                                        <h3 style={{ textAlign: "center" }}>
                                            بدون نظر
                                        </h3>
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="reviews-form">
                                <div className="contact-form">
                                    <h3>افزودن نظر</h3>

                                    <div className="rating">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star-half"></i>
                                    </div>

                                    <ProductSendComment />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductComments;
