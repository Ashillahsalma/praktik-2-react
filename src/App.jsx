import React from 'react';
import ProductCard from './components/ProductCard';

const products = [
  { name: "Laptop Ultra-X", price: 18500000, isAvailable: true },
  { name: "Smartphone Mini P", price: 9990000, isAvailable: false },
  { name: "Mouse Ergonomis Pro", price: 450000, isAvailable: true },
  { name: "Speaker Bluetooth V3", price: 780000, isAvailable: false },
];

const App = () => (
  <div style={{ padding: 40, backgroundColor: '#f9f9f9', minHeight: '100vh', textAlign: 'center' }}>
    <h1 style={{ marginBottom: 30, color: '#333' }}>Katalog Produk Digital</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);

export default App;
