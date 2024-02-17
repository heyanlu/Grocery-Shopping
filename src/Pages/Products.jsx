import React, { useState, useContext } from 'react';
import { allProducts } from '../data';
import ProductItem from '../Components/ProductItem';
import { ProductContext } from '../Context/productContext';
import Pagination from '../Components/Pagination';
import '../Styles/Products.css';

const Products = () => {
  const { SearchTriggered, wordEntered, filteredProducts } = useContext(ProductContext);
  
  const [currentPage, setCurrentPage] = useState(0); 
  const productsPerPage = 10;

  const pagesVisited = currentPage * productsPerPage;

  const currentProducts = SearchTriggered || wordEntered.length > 0 ? filteredProducts : allProducts;

  const displayProducts = currentProducts
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item) => (
      <ProductItem item={item} key={item.id} /> 
    ));
  
  const pageCount = Math.ceil(currentProducts.length / productsPerPage);

  const paginate = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container">
      <div className="productsLitems">
        <div className="products">
          {displayProducts}
        </div>
      </div>
      <Pagination pageCount={pageCount} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Products;
