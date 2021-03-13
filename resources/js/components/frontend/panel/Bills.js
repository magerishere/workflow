import React, { useState } from "react";
import axios from "axios";
import Bill from "./Bill";

const Bills = ({ bills }) => {
    const [bill, setBill] = useState(null);
    const [details, setDetails] = useState([]);
    const showBill = async (id) => {
        const res = await axios.get(`/order/${id}`);
        console.log(res);
        //set specific orders in bill
        setBill(res.data.bill);
        let list = [];

        for (let i = 0; i < res.data.details.length; i++) {
            list.push(res.data.details[i]);
        }
        setDetails(list);
    };

    return (
        <>
            {bill ? (
                <Bill
                    bill={bill}
                    details={details}
                    closeBill={() => setBill(null)}
                />
            ) : (
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>محصولات</th>
                            <th>قیمت کل</th>
                            <th>تاریخ</th>
                            <th>مشاهده فاکتور</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((bill) => (
                            <tr key={bill.id}>
                                <td>{bill.address}</td>
                                <td>{bill.cost}</td>
                                <td>{bill.created_at}</td>
                                <td>
                                    <button
                                        className="default-btn btn-bg-three"
                                        onClick={() => showBill(bill.id)}
                                    >
                                        مشاهده
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Bills;
