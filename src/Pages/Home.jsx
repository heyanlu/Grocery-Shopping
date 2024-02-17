import React, {useContext} from 'react'; 
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Search from "../Components/Search"; 
import { ProductContext } from '../Context/productContext';
import ProductFilter from "../Components/ProductFilter"; 
import "../Styles/Home.css";



const Home=() => {
  const { SearchTriggered, wordEntered } = useContext(ProductContext);
  return (
    <div className="container">
      <div className="productsLitems">
        {SearchTriggered || wordEntered.length > 0 ? (
          <div className="search">
            <ProductFilter />

          </div>
        ) : (
          <div className="components">
            <Slider />
            <Categories />
          </div>
        )}
      </div>
    </div>
  );
};


export default Home;

