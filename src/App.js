import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"; 
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Vegetables from './Pages/Vegetables';
import Meat from './Pages/Meat';
import Snacks from './Pages/Snacks';
import Fruits from './Pages/Fruits';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Logout from './Pages/Logout';
import Cart from "./Pages/Cart";
import { ProductContextProvider } from "./Context/productContext";
import ProductFilter from "./Components/ProductFilter"; 

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productFilter" element={<ProductFilter />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/vegetables" element={<Vegetables/>} />
          <Route path="/meat" element={<Meat/>} />
          <Route path="/snacks" element={<Snacks/>} />
          <Route path="/fruits" element={<Fruits/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/register" element={<Register/>} />
          <Route path="/logout" component={<Logout/>} /> */}
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </Router>   
      </ProductContextProvider>  
    </div>
  )
}

export default App

