import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const AddProduct = ({ addNewProduct }) => {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: '',
    category: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.title || !product.image || !product.price || !product.category) {
      alert("Please fill all fields!");
      return;
    }
    
    addNewProduct(product);
    setProduct({ title: '', image: '', price: '', category: '' });
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'gray' }}>
      <h2 style={{ fontFamily: 'Arial, sans-serif' }}>Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="title" style={{ display: 'block', fontSize: '14px' }}>Product Name</label>
          <input
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="image" style={{ display: 'block', fontSize: '14px' }}>Image URL</label>
          <input
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="price" style={{ display: 'block', fontSize: '14px' }}>Price</label>
          <input
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="category" style={{ display: 'block', fontSize: '14px' }}>Category</label>
          <input
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'green', color: 'white', fontSize: '16px', border: 'none', cursor: 'pointer' }}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
