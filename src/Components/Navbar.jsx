import React, { useState, useContext } from 'react';
import Logo from "../Asset/logo_green.jpeg";
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'; 
import { ProductContext } from '../Context/productContext';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import "../Styles/Navbar.css";


const Navbar = () => {
    const {
      wordEntered,
      filteredProducts,
      setFilteredProducts,
      handleFilter,
      clearInput,
    } = useContext(ProductContext);
  
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
  
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const handleLogin = () => {
    //     setIsLoggedIn(true);
    // };

    // const handleLogout = () => {
    //     setIsLoggedIn(false);
    // };
  
  
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="center">
        <input
          type="text"
          placeholder="Type to search..."
          value={wordEntered}
          onChange={(e) => handleFilter(e)}
        />
        {filteredProducts.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="clearbtn" onClick={clearInput} />
        )}
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link>
        <Link to="/cart">
          <ShoppingCartOutlinedIcon style={{ fontSize: '25px' }} />
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        {/* <LoginControl /> */}
            {/* {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
        ) : (
            <button onClick={handleLogin}>Login</button>
        )}  */}
      </div>
    </div>
  );
}

export default Navbar;