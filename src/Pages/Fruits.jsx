import React, { useState } from 'react'; 
import { fruits } from "../data";
import ProductItem from "../Components/ProductItem";
import Pagination from '../Components/Pagination';
import "../Styles/ProductContainer.css";

const Fruits =() => {  
    const [currentPage, setCurrentPage] = useState(0); 
    const productsPerPage = 10;
  
    const pagesVisited = currentPage * productsPerPage;
    
    const displayProducts = fruits
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((item) => (
        <ProductItem item={item} key={item.id} /> 
    ));
  
    const pageCount = Math.ceil(fruits.length / productsPerPage);

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

export default Fruits