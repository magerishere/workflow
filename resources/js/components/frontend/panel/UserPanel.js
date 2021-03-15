import React, { Component } from "react";
import axios from "axios";
import "./Bill.css";
import Bills from "./Bills";

class UserPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { bills: [], isLoading: true };
    }

    async componentDidMount() {
        const res = await axios.get("/order");
        console.log(res);
        res.data.status === 200 &&
            this.setState({ bills: res.data.bills, isLoading: false });
    }
    render() {
        const { bills, isLoading } = this.state;
        return (
            <>
                {isLoading && (
                    <div class="preloader">
                        <div class="spinner">
                            <div class="dot1"></div>
                            <div class="dot2"></div>
                        </div>
                    </div>
                )}
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
                            <Bills bills={bills} />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default UserPanel;
