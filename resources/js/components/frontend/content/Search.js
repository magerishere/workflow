import React from 'react';


const Search = ({search,searchHandler}) => {
    
    return (
        <>
        <input type="text" value={search} onChange={searchHandler} placeholder="جستجو محصول ..."   />
        </>
    )
}

export default Search;