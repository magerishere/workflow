import axios from "axios";

export const validation = async (email, password, confirm) => {
    const data = { email, password, confirm };
    let response;
    let result;
    result =
        password.length > 8
            ? password === confirm
                ? (response = await axios.post("/user", data))
                : "رمز تایید اشتباه است"
            : "رمز بایدبیشتر از 8 رقم باشد";

    if (response) {
        console.log(response);
        result =
            response.data[0].original.status === 200
                ? "موفق! درحال آماده سازی حساب شما ..."
                : "ایمیل وجود دارد";
    }
    return result;
};
