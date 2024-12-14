import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import { Link } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]); 
  const [newProducts, setNewProducts] = useState([]); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const addNewProduct = (product) => {
    setNewProducts([...newProducts, product]);
  };

  return (
    <Router>
      <div style={{ padding: '10px', backgroundColor: 'green' }}>
        <div style={{ padding: '10px', backgroundColor: 'gray', color: 'white' }}>
          <h1 style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>Product Management</h1>
          <div style={{ marginTop: '10px' }}>
            <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
            <Link to="/add-product" style={{ color: 'white' }}>Add Product</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home products={[...products, ...newProducts]} />} />
          <Route path="/add-product" element={<AddProduct addNewProduct={addNewProduct} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
