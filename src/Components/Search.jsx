import React, { useState, useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { allProducts } from '../data';
import { ProductContext } from '../Context/productContext';
import ProductItem from '../Components/ProductItem';
import "../Styles/Search.css";

const Search = () => {
  const {
    wordEntered,
    filteredProducts,
    setFilteredProducts,
    handleFilter,
    clearInput,
  } = useContext(ProductContext);
  

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Type to search..."
          value={wordEntered}
          onChange={(e) => handleFilter(e)}
        />
      </div>
      <div className="searchIcon">
        {filteredProducts.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="clearbtn" onClick={clearInput} />
        )}
      </div>

    </div>
  );
};

export default Search;

