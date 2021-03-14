import React, { useState } from "react";
import axios from "axios";
import Bill from "./Bill";
import moment from "moment-jalaali";

moment.locale("fa");
const Bills = ({ bills }) => {
    const [bill, setBill] = useState(null);
    const [details, setDetails] = useState([]);
    const [email, setEmail] = useState("");
    const showBill = async (id) => {
        const res = await axios.get(`/order/${id}`);

        //set specific orders in bill
        setBill(res.data[0].original.bill);
        let list = [];

        for (let i = 0; i < res.data[0].original.details.length; i++) {
            list.push(res.data[0].original.details[i]);
        }
        setDetails(list);
        setEmail(res.data[0].original.email);
    };

    return (
        <>
            {bill ? (
                <Bill
                    email={email}
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
                                <td>
                                    {moment(bill.created_at).format(
                                        "jYYYY/jM/jD"
                                    )}
                                </td>
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
