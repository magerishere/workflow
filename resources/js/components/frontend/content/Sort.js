import React from "react";

const Sort = ({ sort, sortHandler }) => {
    return (
        <select value={sort} onChange={sortHandler}>
            <option value="">فیلتر قیمت</option>
            <option value="highest">بیشترین</option>
            <option value="lowest">کمترین</option>
        </select>
    );
};

export default Sort;
