import React, { useState } from 'react'; 
import { snacks } from "../data";
import ProductItem from "../Components/ProductItem";
import Pagination from '../Components/Pagination';
import "../Styles/ProductContainer.css";

const Snacks =() => {  
    const [currentPage, setCurrentPage] = useState(0); 
    const productsPerPage = 10;
  
    const pagesVisited = currentPage * productsPerPage;
    
    const displayProducts = snacks
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((item) => (
        <ProductItem item={item} key={item.id} /> 
    ));
  
    const pageCount = Math.ceil(snacks.length / productsPerPage);

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

export default Snacks

