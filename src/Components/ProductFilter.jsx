import React, {useContext} from 'react';
import ProductItem from '../Components/ProductItem';
import { ProductContext } from '../Context/productContext';



const ProductFilter = () => {
    const {filteredProducts}  = useContext(ProductContext);
    
    return (
      filteredProducts.length !== 0 ? (
        <div className="searchResult">
          {filteredProducts.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <article>
          <h3>Sorry, No Matching Products.</h3>
        </article>
      )
    );
  };


export default ProductFilter
