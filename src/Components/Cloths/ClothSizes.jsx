import React, { useState } from 'react';

const ClothSizes = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <h2>Apply Filters</h2>
      <button
        className={selectedSize === 'XS' ? 'selected' : ''}
        onClick={() => handleSizeClick('XS')}
      >
        XS
      </button>
      <button
        className={selectedSize === 'S' ? 'selected' : ''}
        onClick={() => handleSizeClick('S')}
      >
        S
      </button>
      <button
        className={selectedSize === 'L' ? 'selected' : ''}
        onClick={() => handleSizeClick('L')}
      >
        L
      </button>
      <button
        className={selectedSize === 'XL' ? 'selected' : ''}
        onClick={() => handleSizeClick('XL')}
      >
        XL
      </button>
      <button
        className={selectedSize === 'XXL' ? 'selected' : ''}
        onClick={() => handleSizeClick('XXL')}
      >
        XXL
      </button>
      <button
        className={selectedSize === 'XXXL' ? 'selected' : ''}
        onClick={() => handleSizeClick('XXXL')}
      >
        XXXL
      </button>
    </div>
  );
};

export default ClothSizes;