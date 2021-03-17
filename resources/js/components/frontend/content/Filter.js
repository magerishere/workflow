import React from "react";

const Filter = () => {
    return (
        <>
            <select className="form-select" aria-label="Default select example">
                <option selected>فیلتر قیمت</option>
                <option value="highest">بیشترین</option>
                <option value="lowest">کمترین</option>
            </select>
        </>
    );
};

export default Filter;