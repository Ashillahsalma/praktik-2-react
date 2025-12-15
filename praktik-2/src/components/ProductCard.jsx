import React from 'react';

// Fungsi untuk format harga ke Rupiah
const formatPriceToRupiah = (amount) =>
  typeof amount === 'number'
    ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount)
    : 'N/A';

// Komponen ProductCard
const ProductCard = ({ name, price, isAvailable }) => {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: 10,
    padding: 15,
    maxWidth: 300,
    margin: 10,
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    backgroundColor: '#fff',
  };

  return (
    <div style={cardStyle}>
      <h4 style={{ margin: '0 0 10px', fontSize: 18, color: '#333' }}>{name}</h4>
      {isAvailable ? (
        <p style={{ fontWeight: 700, color: '#0070f3', fontSize: 16 }}>
          {formatPriceToRupiah(price)}
        </p>
      ) : (
        <p style={{ color: '#888', fontStyle: 'italic', fontSize: 16 }}>Stok Habis</p>
      )}
    </div>
  );
};

export default ProductCard;
