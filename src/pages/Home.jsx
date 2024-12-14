import React from 'react';

const Home = ({ products }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'gray' }}>
      <h2 style={{ fontFamily: 'Arial, sans-serif' }}>Products</h2>
      <div style={{ marginTop: '20px' }}>
        {products.map((product, index) => (
          <div key={index} style={{ marginBottom: '15px', padding: '10px', backgroundColor: 'white' }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }} 
            />
            <h3 style={{ fontSize: '18px', margin: '5px 0' }}>{product.title}</h3>
            <p style={{ fontSize: '14px', color: 'gray' }}>Category: {product.category}</p>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>${product.price}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
