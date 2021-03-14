import React from "react";
import moment from "moment-jalaali";
moment.locale("fa");
const Bill = ({ bill, details, closeBill, email }) => {
    return (
        <>
    
            <div class="page-content container">
                <div class="page-header text-blue-d2">
                    <button
                        className="default-btn btn-bg-three"
                        onClick={closeBill}
                    >
                        X
                    </button>
                    <h1 class="page-title text-secondary-d1">workflow.local</h1>

                    <div class="page-tools">
                        <div class="action-buttons">
                            <a
                                class="btn bg-white btn-light mx-1px text-95"
                                href="#"
                                data-title="Print"
                            >
                                <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                                Print
                            </a>
                            <a
                                class="btn bg-white btn-light mx-1px text-95"
                                href="#"
                                data-title="PDF"
                            >
                                <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                                Export
                            </a>
                        </div>
                    </div>
                </div>

                <div class="container px-0">
                    <div class="row mt-4">
                        <div class="col-12 col-lg-10 offset-lg-1">
                            {/* <!-- .row --> */}

                            <hr class="row brc-default-l1 mx-n1 mb-4" />

                            <div class="row">
                                <div class="col-sm-6">
                                    <div>
                                        <span class="text-sm text-grey-m2 align-middle">
                                            To:
                                        </span>
                                        <span class="text-600 text-110 text-blue align-middle">
                                            {email}
                                        </span>
                                    </div>
                                    <div class="text-grey-m2">
                                        <div class="">
                                            آدرس : {bill.address}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /.col --> */}

                                <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                    <hr class="d-sm-none" />
                                    <div class="text-grey-m2">
                                        <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                            {moment(bill.created_at).format(
                                                "jYYYY/jM/jD"
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /.col --> */}
                            </div>

                            <div class="mt-4">
                                <div class="row border-b-2 brc-default-l2"></div>

                                {/* <!-- or use a table instead --> */}

                                <div class="table-responsive">
                                    <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                                        <thead class="bg-none bgc-default-tp1">
                                            <tr class="text-white">
                                                <th class="opacity-2">#</th>
                                                <th>نام محصول</th>
                                                <th>تعداد</th>
                                                <th>قیمت (تومان)</th>
                                                <th width="140">
                                                    (تومان) قیمت کل
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody class="text-95 text-secondary-d3">
                                            <tr></tr>
                                            {details.map((detail) => (
                                                <tr>
                                                    <td>{detail.id}</td>
                                                    <td>{detail.name}</td>
                                                    <td>{detail.quantity}</td>
                                                    <td class="text-95">
                                                        {detail.price}
                                                    </td>
                                                    <td class="text-secondary-d2">
                                                        {detail.price *
                                                            detail.quantity}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                                        ممنون از خرید شما
                                    </div>

                                    <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                                        <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                            <div class="col-7 text-right">
                                                جمع کل
                                            </div>
                                            <div class="col-5">
                                                <span class="text-150 text-success-d3 opacity-2">
                                                    {bill.cost}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bill;
