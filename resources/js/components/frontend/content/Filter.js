import React from 'react';


const Filter = ({filterValue,filterHandler}) => {
    return (
        <select value={filterValue} onChange={filterHandler}>
            <option value="">نوع محصول</option>
            <option value="الکترونیک">الکترونیک</option>
            <option value="پوشاک">پوشاک</option>

        </select>
    )
}
export default Filter;