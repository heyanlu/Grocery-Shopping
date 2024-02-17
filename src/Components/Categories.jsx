import React, { useState } from 'react';
import { categories } from "../data";
import { Link } from "react-router-dom"; 
import "../Styles/Categories.css";

const Categories = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <div className="container" categoryIndex={categoryIndex}>
        {categories.map((item) => (
          <div className="categories" key={item.id}>
            <div className="imageContainer"> 
              <img src={item.img} />
            </div>
            <div className="infoContainer">
                <div className="title">
                    <b>{item.title}</b>
                </div>
                <Link to={`/${item.title}`}>
                    <button className="button">SHOP NOW</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Categories;

